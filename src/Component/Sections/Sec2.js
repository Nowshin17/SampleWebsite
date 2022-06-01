import React from 'react'
import {useState} from 'react';

function Sec2() {
    const [buttonText, setButtonText] = useState('his is one of the most popular ads. After user’s click thisad opens landing page in behind. So, the user experience is not hampered much So, the user experience is not hammuch');
    function handleClick() {
        setButtonText('his is one of the most popular ads. After user’s click thisad opens landing page in behind. So, the user experience is not hampered much So, the user experience is not hammuch');
      }

      function handleClick2() {
        setButtonText('Choose between the available banner formats. Highly effective ad for visibility.');
      }
      function handleClick3() {
        setButtonText('Ad format with the image and the title, that perfectly fits into the content of the site.Native ads are placed in the most visible areas of the page and, thus, this format shows good results and the level of interaction');
      }
      function handleClick4() {
        setButtonText('SKIM" is a link that a publisher inserts on a specific site element, and after clicking on it, an advertisement appears to the user. SKIM gives 100% control of your sold traffic amount, higher CR to advertisers and CPM rates to publishers.');
      }


    
  return (
    <div>
          {/* <button onClick={handleClick}>{buttonText}</button> */}
          
    <div className='background-color alignItem pb-10 '>
            <div class="bg-[#F2F2F2] ">
           
       
             <div class="bg-[#F2F2F2] text-[#644F9C] text-3xl font-semibold text-center pt-20">VERSATILE AD FORMATS</div>

                
                <div class="pl-20 pt-12 flex p-2 gap-4"> 
                    <a class="">
                        <button onClick={handleClick} class="hover:bg-[#bb32ff]  shadow-lg bg-[#FF6F00] text-white font-medium py-2 px-20 border border-[#FF6F00] rounded-full">
                             POP-UNDER 
                        </button>
                    </a>

                    <a class="pl-20">
                        <button onClick={handleClick2} class=" hover:bg-[#bb32ff] shadow-lg bg-[#c9d2d0] text-black font-medium py-2 px-20 border border-[#c6c6c6] rounded-full">
                        BANNER AD 
                        </button>
                    </a>

                    <a class="pl-20">
                        <button onClick={handleClick3} class=" hover:bg-[#bb32ff]  shadow-lg bg-[#c9d2d0] text-black font-medium py-2 px-20 border border-[#c6c6c6] rounded-full">
                        NATIVE 
                        </button>
                    </a>
                    <a class="pl-20">
                        <button onClick={handleClick4} class=" hover:bg-[#bb32ff] shadow-lg bg-[#c9d2d0] text-black font-medium py-2 px-20 border border-[#c6c6c6] rounded-full">
                        SKIM
 
                        </button>
                    </a>
                
            
                </div>



                <div class="flex pt-20">
                   
                    <div>
                        <div class=" ">
                            <div class="box-border h-60 w-80 p-10  bg-[#644F9C] text-center">

                                AD Format
                
                            </div>   
                        </div>
                    </div>

                    <div class=" pl-40 ">
                        <div class="text- text-3xl">Text</div>

                        <div class=" pt-8 text-black text-3xl font-semibold pb-20"> {buttonText}</div>

                    
                    <div class="text-[#644F9C] font-medium hover:underline hover:text-[#FF6F00]"> Learn More</div>
                  
                    </div>

                   
                </div>
            
            </div>
        </div>

    </div>
  )
}

export default Sec2