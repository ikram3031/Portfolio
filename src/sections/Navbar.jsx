import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-blu'>
      <div className="container py-6 mx-auto flex justify-between items-center text-gray-100">
        {/* Logo */}
        <div className="w-1/3 cursor-pointer">
          <Link to='/' className='text-4xl font-hand '>
            Ikramul Hossen
          </Link >
        </div>

        {/* Nav Menu */}
        <div className='flex w-1/3 text-md justify-center gap-8 items-center cursor-pointer'>
          <Link to='/' >Home</Link>
          <Link to='/' >Projects</Link>
          <Link to='/contact' >Contact</Link>
        </div>

        {/* Button */}
        <div className='w-1/3 flex justify-end text-xl '>
          <div className="rounded-full text-blu bg-gray-200 hover:text-deep hover:bg-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 p-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar