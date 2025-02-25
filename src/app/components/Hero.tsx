'use client'
import React from 'react'
import Link from 'next/link'
import Image  from 'next/image'
import profile from "../../../public/assests/profile/profile-pic.png"
const Hero = () => {
  return (
    <div id='Hero'>
     <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-2  lg:px-6 py-24 sm:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col sm:items-start sm:text-left mb-16 md:mb-0 items-center text-center">
      <div className='fade-in'>
      <h1 className="title-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:pt-[30%] mb-4   text-yellow-400">
       Muhammad Bilal Raza
      
      </h1>
      </div>

      <p className="mb-8 leading-relaxed  italic text-gray-100  text-[14px] sm:text-[15px]">
      &quot; With a sharp mind and a compassionate heart, I aim to make a difference in every step I take.&quot;
      </p>

      <div className="flex justify-center text-center ">
        <Link href={"#Contact"}>
        <button id='button'
         className="inline-flex text-gray-700 bg-yellow-400 hover:bg-yellow-500 border-0  focus:outline-none w-[60px] h-[25px] sm:w-[70px] sm:h-[30px] md:w-[82px]  lg:w-[100px]  lg:h-[34px] text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px] px-1  sm:px-2 sm:py-1 md:py-0 lg:pl-3 lg:py-0 shadow-md shadow-gray-500  rounded-2xl ">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover rounded-full border-inherit shadow-md shadow-gray-500  border-[2px] object-center sm:w-[170px] lg:w-[200px] w-[150px]  mx-auto   "
        alt="hero"
        width={500}
        height={500}
        src={profile}
      
      />
    </div>
  </div>
</section>


    </div>
  )
}

export default Hero
