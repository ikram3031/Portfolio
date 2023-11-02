import React, { useEffect, useState } from 'react';
import Ikram from '../assets/ikram.png';
import { Link } from 'react-router-dom';
import './Sections.scss';

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

    <div className="hero"
    >

      {/* Left */}
      <div className="hero_left">
        <div className=''>

          <span className='hero_left_intro'>
            Hi, I'm <span className='text-r'>Ikramul</span><br></br>
            <span className=''>a &nbsp;</span>
            {/* <span className=' text-r ease-in-out animate-scale-50 duration-300'>{skills[skillIndex]}&nbsp; </span>Developer */}
            <span class="animate-load-from-left">{skills[skillIndex]}</span> Developer
          </span>

        </div>

        <span className="text_para mr16 mt">
          A skilled and enthusiastic full-stack developer with a passion for creating innovative and
          user-friendly applications. With a strong focus on delivering high-quality work, I am committed
          to staying up-to-date with the latest trends and technologies in the field.
        </span>

        {/* Find me with */}
        <div className='find_me_with'>
          <h4 className=''>Get In Touch:</h4>

          <div className='find_me_social'>
            <a className='social_icon' href="https://www.facebook.com/ikram3031 " target="_blank">
              <i className=" fa-brands fa-facebook-f"></i>
            </a>
            <a target="_blank" className='social_icon' href="https://www.linkedin.com/in/ikramul-hossen-545a43206/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a target="_blank" className='social_icon' href="https://github.com/ikram3031">

              <i class="fa-brands fa-github"></i>
            </a>
            <a target="_blank" className='social_icon' href="https://api.whatsapp.com/send?phone=+8801784220265&text=Hi%20there!%20I%20have%20a%20question%20:)">

              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
        
      </div>

      {/* Right */}
      <div className="hero_right">
        <div className="hero_img bg-bluto">
          <div >
            <img className='px-5 mx-5 mb-0 overflow-hidden relative' src={Ikram} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero