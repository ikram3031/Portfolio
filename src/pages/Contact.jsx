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

            {/* SIngle Info 1 */}
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

            {/* SIngle Info 2 */}
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

            {/* SIngle Info 3 */}
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
            <form className='flex flex-col'>

              <h4 className='text-2xl py-2 text-deep font-alata px-5 mb-5'>
                How Can I Help You?
                <div className='border-b-3 border-orange2 w-10 pt-1'></div>
              </h4>

              <div className="flex justify-between gap-5">

                {/* Inputs */}
                <div className='flex flex-col gap-5 w-1/2 p-5'>
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
                    className='form px-5 py-2 w-full text-md text-deep font-medium
                  focus:outline-none active:outline-none 
                  placeholder-gray-500'
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email'
                  />
                  <input
                    className='form px-5 py-2 w-full text-md text-deep font-medium
                  focus:outline-none active:outline-none 
                  placeholder-gray-500'
                    type="text"
                    id="Subject"
                    name="subject"
                    placeholder='Subject'
                  />
                </div>

                {/* Textarea */}
                <div className='w-1/2 p-5'>
                  <textarea
                    className='form px-5 py-2 w-full text-md text-deep font-medium
                    focus:outline-none active:outline-none 
                  placeholder-gray-500 h-40'
                    id="message"
                    name="message"
                    placeholder='Message'
                  />
                </div>


              </div>

              {/* Submit */}

              <button
                className='cursor-pointer w-40 mx-auto bg-gradient-to-r bg-orange2
                text-white my-12
                 px-2 py-2 rounded-md hover:bg-bluto
                 transition duration-1000 ease-in-out'
                type="submit"
              >Send Message
              </button>

            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact