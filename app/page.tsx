export default function Home(){
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


        <div className=" flex space-x-20  pt-8 w-full  px-8 py-4 text-gray-700 font-medium text-sm">
          
            <div className="flex flex-col ">
            <div>
              20.04.2024
            </div>
            <div className="text-xs pt-2 text-gray-400">
              11:11 AM  
            </div>
          </div>

          <div>
            Report_Generated_one.csv
          </div>
         
    </div>
       </div>
   





  ); 
}