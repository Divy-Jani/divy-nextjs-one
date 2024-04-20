'use client'

import { LuChevronLast } from "react-icons/lu";
import { LuChevronFirst } from "react-icons/lu";



import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '5'
  const jumpToFirstPage = () => {
    router.push(`/?page=1&per_page=${per_page}`)
  }

  const jumpToLastPage = () => {
     
    const lastPage = 6;
    router.push(`/?page=${lastPage}&per_page=${per_page}`)
  }

  const jumpToPage = (pageNumber: number) => {
    router.push(`/?page=${pageNumber}&per_page=${per_page}`)
  }

  return (




    <div className="flex justify-center space-x-20">
          <div className="flex text-xs  space-x-4 items-center justify-arround ">
              <div>
                  <button  onClick={jumpToFirstPage}>
                  <LuChevronFirst />
                  </button>
                </div>

                <div >
                  <button  disabled={!hasPrevPage} 
                   onClick={() => {     router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`)
                    }} >
                    Prev
                  </button>
                </div>
               


                {[1, 2, 3, 4, 5,6].map((pageNumber) => (
          <div key={pageNumber} onClick={() => jumpToPage(pageNumber)} className={`border-solid border-2 border-gray py-1.5 px-3 rounded cursor-pointer ${Number(page) === pageNumber ? 'bg-orange-600 text-white' : ''}`}>
            {pageNumber}
          </div>
        ))}


                <div >
                <button disabled={!hasNextPage}
                                   onClick={() => {
                                    router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
                                    }}>
                Next
                </button>
                </div>

                  <div>
                    <button onClick={jumpToLastPage}>
                    <LuChevronLast />
                    </button>
                  </div>
              </div>




              <div className="flex text-xs items-center space-x-4">
                <div>
                  Rows per page
                </div>

                <div className=" border-solid border-2 items-center border-gray py-1 px-3 rounded flex space-x-4" >
                  <div> 5 </div>
                  <div> 
               <button className="pt-1"> 
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                       <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
               </button>

                  </div>
                </div>



              </div>



        </div>
  )
}


export default PaginationControls


