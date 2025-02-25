
import Link from 'next/link'
import React from 'react'

import {FaCloudDownloadAlt} from 'react-icons/fa';
const Navbar = () => {
  return (
    <div id='Navbar'>
      <header className="text-blue-200 body-font  bg-black h-[35px] sm:h-[41px] md:h-[49px] lg:h-[48px]   ">
  <div className="container mx-auto flex flex-wrap p-1 flex-col sm:flex-row sm:justify-between ">
    <a className=" hidden sm:flex   font-medium text-yellow-400 mb-1 md:mb-0">
     
    <h1 className='lg:pl-[10px] lg:text-[24px] md:text-[21px] sm:text-[17px] text-[12px] font-mono'>
      BILAL
    </h1>


    </a>
    <nav className="  md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center md:gap-4 gap-2 sm:gap-3">
      < Link href="/" className="  text-[14px] m-2 sm:text-[16px]  lg:text-[19px] md:mr-5  sm:mr-3 hover:text-yellow-400 hover:lg:text-[22px] hover:sm:text-[17px] hover:text-[16px]">Home</Link>
      < Link href="#Projects"className="  text-[14px] m-2 sm:text-[16px] lg:text-[19px] md:mr-5  sm:mr-3 hover:text-yellow-400  hover:lg:text-[22px] hover:sm:text-[17px] hover:text-[16px] ">Projects</Link>
      < Link href="#Contact"className=" text-[14px]  m-2 sm:text-[16px] lg:text-[19px] md:mr-5  sm:mr-3 hover:text-yellow-400  hover:lg:text-[22px] hover:sm:text-[17px] hover:text-[16px] "> Contact </Link>
      < Link href="#About"className=" text-[14px]   m-2sm:text-[16px] lg:text-[19px] md:mr-5  sm:mr-3 hover:text-yellow-400  hover:lg:text-[22px] hover:sm:text-[17px] hover:text-[16px] ">About</Link>

    </nav>
    <a href="/assests/cv/my-resume.pdf" target='-blank' className=' '> 
    <button id='button'
     className=" hidden sm:inline-flex pl-1 text-blue-950  sm:text-[10px]  w-[90px]  h-[25px] md:w-[98px] md:h-[28px] lg:w-[115px] lg:h-[30px] bg-gray-100 border-0 py-1 lg:px-1 focus:outline-none hover:bg-gray-300 rounded-md lg:text-[12px] lg:mt-1 lg:mb-2 mr-2 md:mt-0 h:[15px] justify-center items-center ">
     Download CV
     <FaCloudDownloadAlt  className=' text-[13px] md:text-[18px] lg:text-[25px] ml-1 lg:ml-2 '/>
    </button>
    </a>
  </div>

</header>
    </div>
  )
}

export default Navbar
