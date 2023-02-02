import React from 'react';
import Ikram from '../assets/ikram.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="w-4/5 mx-auto flex justify-between items-center py-10">
        
    {/* Left */}
    <div className="w-1/2 flex flex-col gap-5 p-4">
      <div className=''>

        <span className='font-os text-8xl'>
          Hi<br></br>
          I'm Ikramul<br></br>
          Hossen
        </span>
      </div>
      <span className="text-sm font-semibold text-para">
        A full stack developer with a passion for creating <br></br>innovative and user-friendly applications
      </span>

      {/* Button */}
      <Link to='/contact' className="pt-5 cursor-pointer w-40">
        <span className='bg-gradient-to-r from-blu via-bluform to-bluto
         text-light flex items-center justify-center
          px-2 py-2 rounded-md hover:bg-bluto
          transition duration-500 ease-in-out
          '>
          Contact
        </span>
      </Link>
    </div>

    {/* Right */}
    <div className="w-1/2 p-4">
      <div className="border rounded-l-full rounded-r-lg
       w-80 mx-auto border-gray-100 bg-gbg shadow-2xl ">
        <div>
          <img className='px-5 mx-5' src={Ikram} alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero