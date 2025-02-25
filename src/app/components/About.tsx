import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id='About'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className='fade-in' >
<h1 className='text-yellow-400 md:text-center p-4 sm:p-4 md:text-[24px] lg:text-[26px] text-[19px] sm:text-[20px] sm: font-medium  '>
  About Me 
</h1>
    </div>
    <div className="text-center mb-20">
      <h1  className="sm:text-2xl md:text-3xl text-2xl font-medium   title-font text-yellow-400 mb-4">
        
        <p className='fade-in'>Muhammad Bilal Raza</p>
      </h1>
      <p className='leading-relaxed italic text-gray-300  text-[14px] sm:text-[15px] lg:text-[17px]'>
      Hi, I am Mohd.Bilal, a web developer with expertise in building responsive and user-friendly websites. I specialize in   HTML, CSS, Nodejs, JavaScript, React,and Typescript and I &apos; m passionate about creating seamless, high-performance digital experiences. I thrive on problem-solving and continuously learning new skills to stay up-to-date with industry trends. Let’s work together to bring your ideas to life!
      </p>
     
</div>
<Link href="#Hero">
    <button  className="flex mx-auto mt-16 px-1 text-black bg-yellow-400 border-0 py-2  focus:outline-none hover:bg-yellow-500 hover:rounded-2xl rounded-xl text-[10px] sm:text-[12px] md:text-[14px] lg:text-lg">
   Go To Profile
    </button>
    </Link>
  </div>
</section>

    </div>
  )
}

export default About
