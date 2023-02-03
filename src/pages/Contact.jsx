import React from 'react'
import Pagetitle from '../components/Pagetitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  return (
    <div className='py-20'>
      <div className='container mx-auto '>
        <Pagetitle title="CONTACT" />


      </div>
      {/* Main Contact Section */}
      <div className='bg-light  py-20'>
        <div className="flex container mx-auto justify-between gap-5 items-center">

          {/* Info */}
          <div className="p-5 w-1/3 flex flex-col gap-2">

            {/* SIngle Info */}
            <div
              className="flex justify-between gap-5 w-full
              bg-white p-5 m-2 inner rounded-sm h-32 items-center"
            >
              <div className="w-30">
                <FontAwesomeIcon className='text-4xl text-orange' icon={faMobileScreenButton} />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className='text-lg font-semibold font-alata text-deep'>
                  +8801784220265
                </div>
                <span className='text-gray-500 text-sm mr-5'>
                  For any inquiries, please do not hesitate to call me.
                </span>
              </div>
            </div>

            {/* SIngle Info */}
            <div
              className="flex justify-between gap-5 w-full
              bg-white p-4 m-2 inner rounded-sm h-32 items-center"
            >
              <div className="w-30">
                <FontAwesomeIcon
                  className='text-4xl text-orange'
                  icon={faMapLocationDot}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className='text-lg font-semibold font-alata text-deep'>
                  Dhaka, Bangladesh
                </div>
                <span className='text-gray-500 text-sm mr-5'>
                  116/F, North Mugdapara, Dhaka-1214
                </span>
              </div>
            </div>

            {/* SIngle Info */}
            <div
              className="flex justify-between gap-5 w-full
              bg-white p-4 m-2 inner rounded-sm h-32 items-center"
            >
              <div className="w-30">
                <FontAwesomeIcon
                  className='text-4xl text-orange'
                  icon={faEnvelope}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className='text-lg font-semibold font-alata text-deep'>
                  ikramul.web@gmail.com
                </div>
                <span className='text-gray-500 text-sm mr-5'>
                  Interested in collaborating on your upcoming projects?
                </span>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="p-5 w-2/3">
            <form>
              <div className='flex flex-col gap-5'>
                <input
                  className='form px-5 py-2 w-full text-md text-deep font-medium
                  focus:outline-none active:outline-none 
                  placeholder-gray-500'
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Name'
                />
                <input
                  className='form px-5 py-2 w-full text-md text-deep font-normal'
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Name'
                />
                <input
                  className='form px-5 py-2 w-full text-md text-deep font-normal'
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Name'
                />
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact