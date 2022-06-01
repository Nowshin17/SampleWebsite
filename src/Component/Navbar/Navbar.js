import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.scss';
import '../Styles/style_section.scss';


function Navbar() {
  return (
  <div> 
      {/* Navbar */}
    <div className='imgCover alignItemNav' >
        <div class="flex justify-between">
            <div className='logo pl-20 pt-6'>
                <button class="text-black font-bold text-[30px]">
                            Logo
                </button>
            </div>
            <div className='pr-40 pt-6'>
                <span class="text-[#75bd02]">BN </span >/ EN
            </div>
        </div>

        <div className='sum'>
            <div className='item'>
                <ul className='ul'>
                {/* <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> */}
                    <li> <div class="text-[20px] pt-3 hover:text-[#FF6F00]"><Link to='/'> HOME </Link> </div> </li>
                    <li> <div class="text-[20px] pt-3 hover:text-[#FF6F00]"><Link to='/Products'> ADVERTISERS</Link></div></li>
                    <li> <div class="text-[20px] pt-3 hover:text-[#FF6F00]"><Link to='/Client'> PUBLISHERS </Link></div></li>
                    <li> <div class="text-[20px] pt-3 hover:text-[#FF6F00]"><Link to='/AboutUs'> INFLUENCERS</Link> </div></li>
                    <li> <div class="text-[20px] pt-3 hover:text-[#FF6F00]"><Link to='/AboutUs'> AD FORMATS</Link> </div></li>
                    <li> <div class="text-[20px] pt-3 hover:text-[#FF6F00]"><Link to='/AboutUs'> BLOG</Link> </div></li>
                    <li> <div class="text-[20px] pt-3 hover:text-[#FF6F00]"><Link to='/AboutUs'> CONTACT US</Link> </div></li>
                    <li>
                       <div className='logo pl-20 '>
                            <button class="bg-white text-black font-medium py-2 px-4 border-[#ff6752] shadow-md rounded-full">
                                <div class="flex">
                                    <div className=' pt-2.5 pr-4 pl-2 hover:text-[#FF6F00]'>LOGIN </div>
                                    <div> 
                                        <button class="bg-[#FF6F00] shadow-md text-white font-medium py-2 px-10 hover:bg-[#cc7300] border border-[#cc7300] rounded-full">
                                            SIGN UP
                                        </button>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </li>

          
                    
                </ul>

            </div>
        </div>
{/* Navbar end */}

{/* Hero section */}

        <div class="pt-40 pl-20">
            <div class="flex">
                <div>
                    <div class="text-black">Learn New Skills </div>
                    <div class="text-[#644F9C] text-6xl font-bold">Here Will Be,</div>
                    <div class="text-[#644F9C] text-6xl font-bold">The <span class="text-[#FF6F00]">Title</span >.</div>
                    <div class=" pt-8 text-black"> Dramatically supply tranparent deliverables before backward</div>
                    <div class="text-black">comp internam or "organic" sources. Completely leverage other. </div>
                </div>

            
                <div>
                    <div class="absolute right-80 ">
                        <div class="box-border h-60 w-80 p-4 bg-white text-center">

                            Art work
            
                        </div>   
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>

  )
}

export default Navbar