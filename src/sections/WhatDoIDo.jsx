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
                I specialize in building modern, scalable web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. From frontend design implementation to backend integration, I ensure clean, maintainable code and seamless user experiences. I focus on performance, responsiveness, and efficient data handling to deliver reliable full-stack solutions.
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
                With over 4 years of experience and 80+ WordPress websites delivered, I create fully customized WordPress solutions using Elementor Pro, Advanced Custom Fields (ACF), and Custom Post Types (CPT). My work focuses on building SEO-friendly, responsive, and easy-to-manage websites tailored to client goals.
              </p>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default WhatDoIDo