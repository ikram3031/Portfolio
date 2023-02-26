import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MobileMenu from '../components/MobileMenu';
import './Sections.scss'

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [mobileBar, setMobileBar ] = useState(false)

  const handleSidebar = () => {
    setSidebar(!sidebar);
    // sidebar = !sidebar
    console.log(`Sidebar is : ${sidebar}`)
  };

  const handleMobileBar = () => {
    setMobileBar(!mobileBar);
    // console.log(mobileBar)                             n
  };


  // Sticky Function
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`nav ${isSticky ? 'sticky' : ''}`}>
      <div className='nav_container container'>

        <div className="main_nav">
          {/* Logo */}
          <div className="nav_logo">
            <Link to='/' className='name font-hand '>
              Ikramul Hossen
            </Link >
          </div>

          {/*Main Nav Menu */}
          <div className='nav_menu'>
            <Link to='/' >Home</Link>
            <Link to='/resume' >Resume</Link>
            <Link to='/projects' >Projects</Link>
            <Link to='/contact' >Contact</Link>
          </div>

          {/*Main Button */}
          <button onClick={handleSidebar} className='nav_button'>
            <div className="nav_btn_icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 p-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </div>

          </button>

          {/* Mobile logo */}
          <div className="mobile_logo">
            <Link to='/' className='name font-hand '>
              Ikramul Hossen
            </Link >
          </div>

          {/* Mobile Button */}
          <button onClick={handleMobileBar} className='mobile_button'>
            <div className="nav_btn_icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 p-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </div>

          </button>

          {/* Sidebar */}
          {sidebar && (
            <Sidebar setSidebar={setSidebar} />
          )
          }

          {/* Mobile BAr */}
          {
            mobileBar && (
              <MobileMenu setMobileBar={setMobileBar}/>
            )
          }

        </div>
      </div >
    </div >

  )
}

export default Navbar