import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = () => {
    setSidebar(!sidebar);
    console.log(sidebar)
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
    < div className={`bg-gradient-to-r w-full nav  from-blu via-blufrom to-bluto ${isSticky ? 'sticky' : ''}`}>
      <div className='w-1200 mx-auto flex justify-between 
      items-center md:w-700 lg:w-1000 
      '>
        <div className="w-90 py-6 mx-auto  flex justify-between items-center text-gray-100">
          {/* Logo */}
          <div className="w-1/4 cursor-pointer">
            <Link to='/' className='text-4xl font-hand '>
              Ikramul Hossen
            </Link >
          </div>

          {/* Nav Menu */}
          <div className='flex w-1/4 text-md justify-center gap-8 items-center cursor-pointer'>
            <Link to='/' >Home</Link>
            <Link to='/resume' >Resume</Link>
            <Link to='/projects' >Projects</Link>
            <Link to='/contact' >Contact</Link>
          </div>

          {/* Button */}
          <button onClick={handleSidebar} className='w-1/4 flex justify-end text-xl '>
            <div className="rounded-full text-blu bg-gray-200 hover:text-deep hover:bg-white cursor-pointer">
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

        </div>
      </div >

      {/* Mobile Nav */}
      {/* <div className={`sm:w-full bg-gradient-to-r nav from-blu via-blufrom py-4 px-2 to-bluto ${isSticky ? 'sticky' : ''}`}>
        <div className="flex justify-between items-center">

          <div className="w-1/2 cursor-pointer">
            <Link to='/' className='text-xl text-white font-hand '>
              Ikramul Hossen
            </Link >
          </div>


          <div className='text-white hover:text-bg'>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

      </div> */}
    </div >

  )
}

export default Navbar