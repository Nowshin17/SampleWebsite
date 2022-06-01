import React from 'react';
import '../Styles/style_section.scss';

function Section8() {
  return (
    <div class=" shadow-2xl">
         <div className='background-color8 alignItem shadow-2xl'>
         <div class="bg-[#F2F2F2] text-[#644F9C] text-3xl font-semibold text-center pt-20">Title 1</div>
            

            <div class="flex gap-40 pt-20 pl-20">
                 
            <a class="flex flex-col items-center bg-white rounded-3xl border shadow-lg md:flex-row md:max-w-xl p-4">
              <div class="flex flex-col items-center bg-white rounded-3xl border-dotted border-2 border-[#FF6F00] md:flex-row md:max-w-xl p-2">
                  <img class="object-cover w-full h-99 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="./cardImg.png" alt=""/>
                  <div class="flex flex-col justify-between p-4 leading-normal">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#644F9C] ">Text 1</h5>
                      <p class="mb-3 font-normal text-gray-500 ">Dramatically supply tranparent deliverables before backward</p>
                      
                  </div>
              </div>
            </a>
            
            <a class="flex flex-col items-center bg-white rounded-3xl border shadow-lg md:flex-row md:max-w-xl p-4">
              <div class="flex flex-col items-center bg-white rounded-3xl border-dotted border-2 border-[#FF6F00] md:flex-row md:max-w-xl p-2">
              <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg pl-2" src="./cardImg2.png" alt=""/>
                  <div class="flex flex-col justify-between p-4 leading-normal">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#644F9C] ">Text 2</h5>
                      <p class="mb-3 font-normal text-gray-500 ">Dramatically supply tranparent deliverables before backward</p>
                      
                  </div>
              </div>
            </a>
      



            </div>

            <div className='pl-[700px] pt-12 flex gap-4'>
            <button class="p-2 border rounded-full bg-white border-transparent text-[#644F9C] shadow-xl">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button class="p-2 border rounded-full bg-white border-transparent text-[#644F9C] shadow-xl">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>

         </div>
    </div>
  )
}

export default Section8