import React from 'react';
import './components.scss';
import { Link } from 'react-router-dom';

const MobileMenu = ({ setMobileBar = () => { } }) => {
  return (
    <div className='mobile_menu'>
      <div className="mobile_container">
        {/* Close button */}
        <button className='close_button' onClick={() => setMobileBar(false)}>
          <i class="fa-solid fa-circle-xmark"></i>
        </button>

        {/* Menu */}
        <div className='mobile_nav_menu'>
          <Link onClick={() => setMobileBar(false)} to='/' >Home</Link>
          <Link onClick={() => setMobileBar(false)} to='/portfolio' >Portfolio</Link>
          <Link onClick={() => setMobileBar(false)} to='/projects' >Projects</Link>
          <Link onClick={() => setMobileBar(false)} to='/contact' >Contact</Link>
        </div>

        {/* Social Icons */}
        <div className='social_icons'>
          <a className='social_single_icon' href="https://www.facebook.com/ikram3031 " target="_blank">
            <i className="h6 fa-brands fa-facebook-f"></i>
          </a>
          <a target="_blank" className='social_single_icon' href="https://www.linkedin.com/in/ikramul-hossen-545a43206/">
            <i className="h6 fa-brands fa-linkedin-in"></i>
          </a>
          <a target="_blank" className='social_single_icon' href="https://api.whatsapp.com/send?phone=+8801784220265&text=Hi%20there!%20I%20have%20a%20question%20:)">

            <i className="h6 fa-brands fa-whatsapp"></i>
          </a>

          <a target="_blank" className='social_single_icon' href="mailto: ikramul.web@gmail.com">

            <i class="h6 fa-solid fa-at"></i>
          </a>
        </div>

        
      </div>
    </div>
  )
}

export default MobileMenu