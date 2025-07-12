// src/pages/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
   return (
    <>
      <section className='bg-[#001434]'>

        <section className='w-full lg:h-[25rem] md:h-[10rem] h-[4.4rem] flex justify-center items-center bg-center bg-cover' style={{ backgroundImage: "url(./img/bg1.jpg)" }}>
          <span className='md:text-6xl text-2xl font-semibold text-center text-white'>About us</span>
        </section>


        <section className='w-full lg:h-[35rem] md:h-[19rem]  flex md:flex-row flex-col  justify-evenly lg:px-24 px-8 py-6 gap-5 items-center m-auto bg-[#2F4670]'>

          <div className='lg:h-[25rem] md:h-[13rem] h-[13rem] md:w-[25vw] lg:w-[25vw] lg:px-4 flex flex-col justify-center items-center m-auto rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 bg-[linear-gradient(130deg,rgba(0,20,52,1)_25%,rgba(0,0,0,1)_100%)]'>
            <span className='md:text-2xl lg:text-4xl text-xl font-semibold text-center text-white transition-all duration-300'>About us</span>
            <p className='lg:text-xl text-xs px-5 text-center lg:mt-4 mt-2 font-medium transition-all text-white duration-300'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nemo voluptatem, similique enim debitis quo incidunt voluptatibus voluptate provident ipsa?
            </p>
          </div>

          <div className='lg:h-[25rem] md:h-[13rem] h-[13rem] md:w-[25vw] lg:w-[25vw] lg:px-4 flex flex-col justify-center items-center m-auto rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 bg-[linear-gradient(130deg,rgba(0,20,52,1)_25%,rgba(0,0,0,1)_100%)]'>
            <span className='md:text-2xl lg:text-4xl text-xl font-semibold text-center text-white transition-all duration-300'>About us</span>
            <p className='lg:text-xl text-xs px-5 text-center lg:mt-4 mt-2 font-medium transition-all text-white duration-300'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nemo voluptatem, similique enim debitis quo incidunt voluptatibus voluptate provident ipsa?
            </p>
          </div>
          
          <div className='lg:h-[25rem] md:h-[13rem] h-[13rem] md:w-[25vw] lg:w-[25vw] lg:px-4 flex flex-col justify-center items-center m-auto rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 bg-[linear-gradient(130deg,rgba(0,20,52,1)_25%,rgba(0,0,0,1)_100%)]'>
            <span className='md:text-2xl lg:text-4xl text-xl font-semibold text-center text-white transition-all duration-300'>About us</span>
            <p className='lg:text-xl text-xs px-5 text-center lg:mt-4 mt-2 font-medium transition-all text-white duration-300'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nemo voluptatem, similique enim debitis quo incidunt voluptatibus voluptate provident ipsa?
            </p>
          </div>


        </section>

        <section className='w-full space-y-5 md:space-y-0 lg:h-[45rem] md:h-[21rem] h-[12rem] flex flex-col m-auto bg-cover' style={{ backgroundImage: "url(./img/bg2.jpg)" }}>
          <div className='bg-[#001434] w-[70vw] lg:w-[70vw] lg:h-[15rem] md:w-[70vw] md:h-[8rem] h-[4rem] lg:mt-[13%] md:mt-[12%] mt-[20%]'>
            <div className='w-full h-full  xl:px-18 xl:py-16 md:px-5 md:py-6 px-8 py-4 bg-[#4E6185]/70 '>
              <h3 className='lg:text-5xl md:text-3xl text-xs font-bold text-center text-white'>"To empower businesses with cutting-edge digital solutions."</h3>
            </div>
          </div>

          <button className='text-white md:text-2xl text-xs bg-[#880E4F] md:p-3 p-1.5 md:w-[20rem] lg:mt-36 md:mt-10 justify-center items-center m-auto rounded-xl'>Explore our solution</button>
        </section>

        <section className='w-full md:h-[80rem] border-white-2 px-6 py-10 flex justify-center items-center m-auto bg-[linear-gradient(180deg,rgba(0,20,52,1)_55%,rgba(0,0,0,1)_100%)]'>

          <div className='md:w-[44rem] flex flex-col m-auto justify-center items-center'>
            <div className='md:h-[36.8rem] h-[22rem] md:w-[31.5rem] w-[17rem] bg-[linear-gradient(180deg,rgba(18,23,31,1)_78%,rgba(45,54,70,1)_100%)] rounded-4xl flex flex-col justify-center items-center transition-transform duration-500 transform hover:rotate-10'>
              <img src="./img/profile.png" alt="" className='md:w-[27.4rem] md:h-[23rem] h-[10rem] border-amber-100' />
              <span className='md:text-4xl text-2xl text-white mt-5'>Abhishek Kumar</span>
              <span className='md:text-xl text-sm text-white mt-3'>Founder & CEO</span>
              <span className='md:text-3xl text-xl text-white mt-3'>Vaishalitech</span>
              <img src="./img/linkedin.png" alt="linkedin logo" className='h-7 mt-3' />
            </div>

            <span className='md:text-4xl text-2xl text-white font-extralight text-center mt-10'>A Message from Our CEO</span>
            <p className='md:text-2xl text-white font-extralight text-center mt-10'>"Technology companies like VaishaliTech don't just build solutions we shape the future. Every line of code, every design, and every strategy we create Impacts businesses, communities, and the digital landscape at large. But our responsibility doesn't stop there. We're committed to actions that uplift local economies, foster inclusivity, and reduce our environmental footprint because progress should benefit everyone, everywhere.</p>

            <p className='md:text-2xl text-white font-extralight text-center mt-10'>Through sustainable practices, ethical innovation, and partnerships that matter, we're not just delivering technology; we're building a legacy of positive change. Together, let's make the digital world a force for good."</p>

            <p className='md:text-2xl text-[#767A81] text-center font-extraligh mt-10'>-Abhishek Kumar, Founder and CEO, Vaishalitech.</p>
          </div>
        </section>

      </section>

    </>
  )
};

export default AboutUs;
