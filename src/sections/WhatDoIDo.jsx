import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faVectorSquare } from '@fortawesome/free-solid-svg-icons'
import './Sections.scss'

const WhatDoIDo = () => {
  return (
    <div className="what_i_do">
      <div >

        <h4 >
          What I Do
          <div className='underline'></div>
        </h4>

        <div className='what_main'>

          {/* left */}
          <div className='what_left'>
            <div className='p5'>
              <FontAwesomeIcon
                className='what_icon' icon={faCode}
              />
            </div>

            <div className='p5'>
              <span className='what_title'>
                Web App Development
              </span>
              <p className='what_para' >
                I'm a web developer skilled in MERN and static web development using React,
                HTML, CSS, and JavaScript. I deliver high-quality, user-friendly web solutions
                to meet clients' needs. Dynamic apps or simple websites, I bring your vision to life.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className='what_right'>
            <div className='p5'>
              <FontAwesomeIcon
                className='what_icon' icon={faVectorSquare}
              />
            </div>

            <div className='p5'>
              <span className='what_title '>
                Wordpress Development
              </span>
              <p className='what_para' >
                Experienced Wordpress developer with a track record of delivering over 50 successful websites.
                Specializing in theme customization and proficient in Elementor Pro.
                Providing high-quality solutions for 2+ years in the industry.
              </p>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default WhatDoIDo