'use client'
import React from 'react'

const Contact = () => {
  return (
    <div id='Contact'>
  
 <section className="text-gray-600 body-font relative">

  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">

    <div className="lg:w-2/3 w-auto h-[290px] sm:h-[345px] md:h-[390px] lg:h-[460px] md:w-1/2 bg-gray-300 rounded-lg overflow-hidden mr-10 p-10 flex items-end justify-start relative">

      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14484.50687334632!2d67.09844909193762!3d24.825339747231478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b9b06208e57%3A0x7c44546663f83f73!2sAllah%20Wala%20Town%20Korangi%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1736880311449!5m2!1sen!2s"        style={{ filter: " contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-slate-950 w-[170px] sm:w-[200px] sm:text-[14px] sm:pl-0 sm:mr-0 sm:mb-[20px] sm:h-[265px] md:w-[270px] md:h-[290px] md:mb-[58px] md:rounded-[12px]  md:ml-[78px] md:text-[15px] lg:w-[720px]  pl-[15px] lg:text-[17px] lg:h-[170px] lg:ml-0 lg:mr-[60px]  lg:mb-0 text-[12px] h-[220px] relative flex flex-wrap py-6 rounded shadow-md shadow-slate-700">
        <div className="lg:w-1/2 pl-2 sm:px-6">
          <h2 className="title-font font-semibold text-yellow-400 tracking-widest text-xs">
            ADDRESS :
          </h2>
          <p className="mt-1 text-gray-100">
            Korangi Crossing Allah Wala Town St-12 Sect.31-B KDA House#111 3rd Floor Karachi
          </p>
        </div>
        <div className="lg:w-1/2 pl-2 sm:px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-yellow-400 tracking-widest text-xs">
            EMAIL :
          </h2>
          <a className="text-blue-400 leading-relaxed">mbilalraza379@gmail.com</a>
          <h2 className="title-font font-semibold text-yellow-400 tracking-widest text-xs mt-4">
            PHONE:
          </h2>
          <p className="leading-relaxed text-gray-100">0313-2283630</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 w-auto h-[320px] sm:h-[350px] sm:mt-[30px]   md:h-[390px] lg:h-[460px] md:w-1/2 bg-yellow-500 flex flex-col md:ml-auto my-5 sm:my-0  md:py-8  md:mt-0 rounded-md">
      <h2 className="text-gray-900  text-left pl-4 lg:text-[19px] text-[15px] md:text-[17px] mb-1 font-medium title-font">
       Contact Us
      </h2>
      
      <div className="relative mb-4 sm:pl-4 pl-2 ">
        <label htmlFor="name" className="leading-7 text-sm text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Write your name here'
          className="w-full h-[28px] sm:h-[31px] lg:h-[38px] placeholder:text-[12px] placeholder:sm:text-[17px] placeholder:lg:text-[20px]  bg-white rounded border border-gray-800 focus:border-slate-700 focus:ring-2 focus:ring-slate-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4 sm:pl-4 pl-2">
        <label htmlFor="email" className="leading-7 text-sm text-gray-900 ">
          Email
        </label>
        <input
          type="email" 
          id="email"
          name="email"
          placeholder='Write your email here'
          className="w-full h-[28px] sm:h-[31px] lg:h-[38px]  placeholder:text-[12px] placeholder:sm:text-[17px] placeholder:lg:text-[20px] bg-gray-100 rounded border border-gray-800 focus:border-slate-700 focus:ring-2 focus:ring-slate-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
        />
      </div>
      <div className="relative mb-4 sm:pl-4 pl-2">
        <label htmlFor="message" className="leading-7 text-sm text-gray-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder='Write your message here'
          className="w-full h-[40px] sm:h-[51px] lg:h-[38px] placeholder:text-[12px] placeholder:sm:text-[17px] placeholder:lg:text-[20px] bg-white rounded border border-gray-800 focus:border-slate-700 focus:ring-2 focus:ring-slate-200  text-base outline-none text-gray-700 py-1 px-3  resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button type='submit' className="text-gray-100 bg-slate-950 border-0 py-1  sm:py-2 sm:px-6 mx-1 text-[12px] sm:text-[15px] md:text-[17px] lg:text-[20px] focus:outline-none hover:bg-slate-800 rounded ">
       Submit
      </button>
      <p className="text-xs text-gray-800 mt-3 pl-4">
        Thankyou  for reaching out to me.
      </p>
    </div>
  </div>
</section>


    </div>
  )
}

export default Contact


