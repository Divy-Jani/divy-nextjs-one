
import PaginationControls from "./components/paginationControls";
import { data } from '@/app/ui/dummydata';


export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}){

  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '5'
  
  const start = (Number(page) - 1) * Number(per_page)
  const end = start + Number(per_page)
  const entries = data.slice(start, end)


  return (
    <div className="fixed top-4 left-4 right-4 bottom-4 bg-white red-100 z-50 rounded-lg">

        <div className="flex justify-between items-center  px-8 py-4">
          <div> </div>
          <div>
          <h1 className="text-xl  font-medium text-black">Recently Generated Reports</h1>
          </div>
          
            <div className="flex space-x-2 ">

              <button className="focus:outline-none p-2 text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                  </svg>
              </button>

              <button className="focus:outline-none p-2 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
              </button>
          </div>
        </div>



        <div className="bg-gray-100 w-full h-8 flex  items-center space-x-32 px-8 py-6 text-gray-500 font-medium text-sm ">
          
          <div>
            Date
          </div>
          <div>
            Report Name
          </div>
         
          <div className="pr-12 flex-grow text-right ">
            Download
          </div>
        </div>


        {entries.map((entry, index) => (
          <div key={index} className=" flex space-x-20  pt-8 w-full  px-8 py-4 text-gray-700 font-medium text-sm">
          
          <div className="flex flex-col ">
          <div>
          {entry.date}
          </div>
          <div className="text-xs pt-2 text-gray-400">
          {entry.time}
          </div>
        </div>

        <div>
        {entry.filename}
        </div>
       
      
        <div className="pr-16 flex-grow text-right">
             <button >
             <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="#292d32"><path d="m9 17.75c-.1 0-.19-.02-.29-.06-.28-.11-.46-.39-.46-.69v-6c0-.41.34-.75.75-.75s.75.34.75.75v4.19l.72-.72c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2 2c-.14.14-.34.22-.53.22z"/><path d="m8.99945 17.7499c-.19 0-.38-.07-.53-.22l-2-2c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/><path d="m15 22.75h-6c-5.43 0-7.75-2.32-7.75-7.75v-6c0-5.43 2.32-7.75 7.75-7.75h5c.41 0 .75.34.75.75s-.34.75-.75.75h-5c-4.61 0-6.25 1.64-6.25 6.25v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 5.43-2.32 7.75-7.75 7.75z"/><path d="m22 10.75h-4c-3.42 0-4.75-1.33001-4.75-4.75001v-4c0-.3.18-.58.46-.69.28-.12.6-.05.82.16l8 8c.21.21.28.54001.16.82001s-.39.46-.69.46zm-7.25-6.94001v2.19c0 2.58.67 3.25 3.25 3.25h2.19z"/></g></svg>
  
              </button>     
        </div>
           
      </div>
        ))}

        <hr className="w-full my-4  bg-gray-300"></hr>

        <PaginationControls
        hasNextPage={end < data.length}
        hasPrevPage={start > 0}
      />

       </div>
   





  ); 
}