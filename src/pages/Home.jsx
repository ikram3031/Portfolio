import React from 'react';

import Hero from '../sections/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faVectorSquare } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className=' bg-light'>

      {/* What DO I DO */}
      <div className="bg-white py-20">
        <div className='container mx-auto'>

          <h4 className='text-3xl py-2 text-deep'>
            What I Do
          </h4>

          <div className='border-b-4 border-bluto w-16'></div>

          <div className="flex items-center  w-full">
            {/* left */}
            <div className='flex justify-start items-top w-1/2'>

              <div className='p-5'>
                <FontAwesomeIcon
                  className='text-orange text-2xl' icon={faCode}
                />
              </div>

              <div className='p-5'>
                <span className='text-xl font-medium '>
                  Web App Development
                </span>
                <p className='text-base text-blup' >As a web developer, I specialize in developing MERN
                  stack web applications and static websites.
                  I have extensive experience in frontend development,
                  using technologies such as React, HTML, CSS, and
                  JavaScript. I am committed to delivering high-quality
                  and user-friendly web solutions that meet the specific
                  needs of my clients. Whether you need a dynamic web
                  application or a simple, yet effective website, I have
                  the skills and expertise to bring your vision to life.
                </p>
              </div>


            </div>

            <div>
              <FontAwesomeIcon className='text-gray-500' icon={faVectorSquare} />
              Wordpress Development
            </div>
          </div>
        </div>
      </div>

      {/* HEro section */}
      <Hero />



    </div>
  )
}

export default Home