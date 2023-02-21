import React, { useEffect, useState } from 'react';
import Ikram from '../assets/ikram.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [skillIndex, setSkillIndex] = useState(0);
  const skills = ['Full Stack ', 'Wordpress '];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSkillIndex((skillIndex + 1) % skills.length);
    }, 3000); // change 3000 to adjust the duration in milliseconds
    return () => clearInterval(intervalId);
  }, [skillIndex, skills.length]);


  return (

    <div className="w-90   mx-auto flex justify-between items-center py-10">

      {/* Left */}
      <div className="w-2/3  flex flex-col gap-5 p-4 mt-10 ml-10">
        <div className=''>

          <span className='font-pop font-semibold text-6xl text-bl'>
            Hi, I'm <span className='text-r'>Ikramul</span><br></br>
            <span className=''>a &nbsp;</span>
            {/* <span className=' text-r ease-in-out animate-scale-50 duration-300'>{skills[skillIndex]}&nbsp; </span>Developer */}
            <span class="animate-load-from-left duration-300">{skills[skillIndex]}</span> Developer
          </span>

        </div>
        <span className="text-sm font-semibold text-para">
          A skilled and enthusiastic full-stack developer with a passion for creating innovative and 
          user-friendly applications. With a strong focus on delivering high-quality work, I am committed
           to staying up-to-date with the latest trends and technologies in the field.
        </span>
        {/* Find me with */}
        <div>
          <h4 className='text-alata text-md font-semibold text-para mt-10'>Get In Touch:</h4>

          <div className='flex gap-5 my-2 align-center text-para'>
            <a className='py-4 px-5 social rounded-sm ' href="https://www.facebook.com/ikram3031 " target="_blank">
              <i className="h-6 fa-brands fa-facebook-f"></i>
            </a>
            <a target="_blank" className='py-4 px-5 social rounded-sm' href="https://www.linkedin.com/in/ikramul-hossen-545a43206/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a target="_blank" className='py-4 px-5 social rounded-sm' href="https://api.whatsapp.com/send?phone=+8801784220265&text=Hi%20there!%20I%20have%20a%20question%20:)">

              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-1/3 p-4 ">
        <div className="border rounded-l-full rounded-r-lg
       w-80 mx-auto border-gray-100 bg-bluto shadow-2xl ">
          <div className='flex  justify-end' >
            <img className='px-5 mx-5 mb-0 overflow-hidden relative' src={Ikram} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero