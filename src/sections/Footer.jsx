import React from 'react';
import { Link } from 'react-router-dom';
import Copyright from '../components/Copyright';
import Ikram from '../uploads/ikram.png';

const Footer = () => {
  return (
    <div>
      <div className="bg-blu hidden">
        <div className="container mx-auto flex justify-between items-center py-10">
          <div className='flex items-center justify-start gap-6 text-light'>
            <img className='w-16 rounded-full' src={Ikram} alt="" />
            <h4 className='text-xl text-alata'>Ikramul Hossen</h4>
          </div>
          {/* icons */}
          <div className='flex gap-5 my-2 align-center text-para'>
            <a className='py-4 px-5 social-white rounded-sm ' href="https://www.facebook.com/ikram3031 " target="_blank">
              <i className="h-6 fa-brands fa-facebook-f"></i>
            </a>
            <a target="_blank" className='py-4 px-5 social-white rounded-sm' href="https://www.linkedin.com/in/ikramul-hossen-545a43206/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a target="_blank" className='py-4 px-5 social-white rounded-sm' href="https://api.whatsapp.com/send?phone=+8801784220265&text=Hi%20there!%20I%20have%20a%20question%20:)">

              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <div>Center</div>
          <div>Right</div>
          </div> 
      </div>
      <Copyright/>
    </div>
  )
}

export default Footer