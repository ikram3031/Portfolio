import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faVectorSquare } from '@fortawesome/free-solid-svg-icons'

const WhatDoIDo = () => {
  return (
    <div className="bg-light py-20">
    <div className='container mx-auto'>

      <h4 className='text-3xl flex flex-col items-center justify-center py-2 text-deep'>
        What I Do
        <div className='border-b-4 border-bluto w-16 pt-5'></div>
      </h4>

      

      <div className="flex items-center  w-full py-5">

        <div className='flex justify-start items-top '>
          {/* left */}
          <div className='flex shadow-xl p-5 m-5 w-1/2'>
            <div className='p-5'>
              <FontAwesomeIcon
                className='text-orange text-2xl' icon={faCode}
              />
            </div>

            <div className='p-5'>
              <span className='text-xl font-medium '>
                Web App Development
              </span>
              <p className='text-base text-blup pt-5 w-4/5' >
                I'm a web developer skilled in MERN and static web development using React,
                HTML, CSS, and JavaScript. I deliver high-quality, user-friendly web solutions
                to meet clients' needs. Dynamic apps or simple websites, I bring your vision to life.
              </p>
            </div>
          </div>
          {/* Right */}
          <div className='flex shadow-xl p-5 m-5 w-1/2'>
            <div className='p-5'>
              <FontAwesomeIcon
                className='text-orange text-2xl' icon={faVectorSquare}
              />
            </div>

            <div className='p-5'>
              <span className='text-xl font-medium '>
                Wordpress Development
              </span>
              <p className='text-base text-blup pt-5 w-4/5' >
              Experienced Wordpress developer with a track record of delivering over 50 successful websites. 
              Specializing in theme customization and proficient in Elementor Pro. 
              Providing high-quality solutions for 2+ years in the industry.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
  )
}

export default WhatDoIDo