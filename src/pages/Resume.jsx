import React from 'react'
import Pagetitle from '../components/Pagetitle'

const Resume = () => {
  return (
    <div className='py-20'>

      <div className='container mx-auto '>

        <Pagetitle title="RESUME" />

        <div className='flex gap-5 justify-between items-center pt-5 pb-20'>
          {/* Education */}
          <div className='w-1/2'>
            <h4 className='text-2xl py-2 text-deep'>
              Education
              <div className='border-b-3 border-bluto w-10 pt-1'></div>
            </h4>

            {/* RUET */}
            <div className='flex flex-col'>

              <div className="flex gap-4 justify-start items-center pt-5">
                <div
                  className='rounded-2xl px-3 py-1 border-2 border-bluto text-sm text-para'
                >
                  2023
                </div>
                <span className='text-base text-para'>Rajshahi University Of Engineering & Technology</span>
              </div>

              <div className='ml-16 px-1 py-1'>
                <div className='text-lg font-semibold text-deep'>Electronics & Telecommunication Engineering</div>
                <div className='text-sm text-gray-500'>Rajshahi, Bangladesh</div>
              </div>
            </div>
            {/* NDC */}
            <div className='flex flex-col'>

              <div className="flex gap-4 justify-start items-center pt-5">
                <div
                  className='rounded-2xl px-3 py-1 border-2 border-bluto text-sm text-para'
                >
                  2015
                </div>
                <span className='text-base text-para'>Notre Dame College</span>
              </div>

              <div className='ml-16 px-1 py-1'>
                <div className='text-lg font-semibold text-deep'>Science</div>
                <div className='text-sm text-gray-500'>Dhaka, Bangladesh</div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className='w-1/2'>
            <h4 className='text-2xl py-2 text-deep'>
              Experience
              <div className='border-b-3 border-bluto w-10 pt-1'></div>
            </h4>

            {/* Softlab */}
            <div className='flex flex-col'>

              <div className="flex gap-4 justify-start items-center pt-5">
                <div
                  className='rounded-2xl px-3 py-1 border-2 border-bluto text-sm text-para'
                >
                  Sep, 2022 - Oct, 2022
                </div>
                <span className='text-base text-para'>SoftLab IT</span>
              </div>

              <div className='ml-44 px-1 py-1'>
                <div className='text-lg font-semibold text-deep'>Intern Software Engineer</div>
                <div className='text-sm text-gray-500'> Dhaka, Bangladesh</div>
              </div>
            </div>
            {/* NDC */}
            <div className='flex flex-col'>

              <div className="flex gap-4 justify-start items-center pt-5">
                <div
                  className='rounded-2xl px-3 py-1 border-2 border-bluto text-sm text-para'
                >
                  Jan, 2022 - Apr, 2022
                </div>
                <span className='text-base text-para'>Yrban Tech</span>
              </div>

              <div className='ml-44 px-1 py-1'>
                <div className='text-lg font-semibold text-deep'>Frontend Developer</div>
                <div className='text-sm text-gray-500'>Rajshahi, Bangladesh</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* SKills */}
      <div className='flex justify-between items-center flex-col bg-light  py-32'>
        <h4 className='text-pop text-4xl font-semibold  text-deep'>Skills</h4>
        <div className='border-b-3 border-bluto w-10 pt-1'></div>

        {/* Skills inner Section */}
        <div className="flex gap-5 justify-between items-center pt-10 container mx-auto text-base font-alata" >

          {/* Left */}
          <div className='w-1/2 mx-20'>

            {/* Single Skill */}
            <div className="my-1">
              <div className="flex justify-between items-center  w-full ">
                <p className='font-semibold text-deep '>HTML, CSS</p>
                <p className='text-gray-500'>100%</p>
              </div>
              <div className='w-full h-2 border-2 border-gray-300 bg-white rounded-xl my-2 flex items-center'>
                <div className="bg-bluto w-full h-1 my-1 rounded-xl"></div>
              </div>
            </div>

            {/* Single Skill */}
            <div className="my-1">
              <div className="flex justify-between items-center  w-full ">
                <p className='font-semibold text-deep '>Javascript</p>
                <p className='text-gray-500'>90%</p>
              </div>
              <div className='w-full h-2 border-2 border-gray-300 bg-white rounded-xl my-2 flex items-center'>
                <div className="bg-bluto w-11/12 h-1 my-1 rounded-xl"></div>
              </div>
            </div>

            {/* Single Skill */}
            <div className="my-1">
              <div className="flex justify-between items-center  w-full ">
                <p className='font-semibold text-deep '>Typescript</p>
                <p className='text-gray-500'>70%</p>
              </div>
              <div className='w-full h-2 border-2 border-gray-300 bg-white rounded-xl my-2 flex items-center'>
                <div className="bg-bluto w-70 h-1 my-1 rounded-xl"></div>
              </div>
            </div>

            {/* Single Skill */}
            <div className="my-1">
              <div className="flex justify-between items-center  w-full ">
                <p className='font-semibold text-deep '>React</p>
                <p className='text-gray-500'>75%</p>
              </div>
              <div className='w-full h-2 border-2 border-gray-300 bg-white rounded-xl my-2 flex items-center'>
                <div className="bg-bluto w-3/4 h-1 my-1 rounded-xl"></div>
              </div>
            </div>

            {/* Single Skill */}
            <div className="my-1">
              <div className="flex justify-between items-center  w-full ">
                <p className='font-semibold text-deep '>Node & Express</p>
                <p className='text-gray-500'>80%</p>
              </div>
              <div className='w-full h-2 border-2 border-gray-300 bg-white rounded-xl my-2 flex items-center'>
                <div className="bg-bluto w-4/5 h-1 my-1 rounded-xl"></div>
              </div>
            </div>

          </div>

          {/* Right */}
          <div className='w-1/2 mx-20 '>

            {/* Single Skill */}
            <div className="my-1">
              <div className="flex justify-between items-center  w-full ">
                <p className='font-semibold text-deep '>Wordpress Theme Customization</p>
                <p className='text-gray-500'>95%</p>
              </div>
              <div className='w-full h-2 border-2 border-gray-300 bg-white rounded-xl my-2 flex items-center'>
                <div className="bg-bluto w-95 h-1 my-1 rounded-xl"></div>
              </div>
            </div>

            {/* Single Skill */}
            <div className="my-1">
              <div className="flex justify-between items-center  w-full ">
                <p className='font-semibold text-deep '>Elementor Pro</p>
                <p className='text-gray-500'>95%</p>
              </div>
              <div className='w-full h-2 border-2 border-gray-300 bg-white rounded-xl my-2 flex items-center'>
                <div className="bg-bluto w-95 h-1 my-1 rounded-xl"></div>
              </div>
            </div>

            {/* Single Skill */}
            <div className="my-1">
              <div className="flex justify-between items-center  w-full ">
                <p className='font-semibold text-deep '>MS Office</p>
                <p className='text-gray-500'>80%</p>
              </div>
              <div className='w-full h-2 border-2 border-gray-300 bg-white rounded-xl my-2 flex items-center'>
                <div className="bg-bluto w-4/5 h-1 my-1 rounded-xl"></div>
              </div>
            </div>

            {/* Single Skill */}
            <div className="my-1">
              <div className="flex justify-between items-center  w-full ">
                <p className='font-semibold text-deep '>Angular</p>
                <p className='text-gray-500'>60%</p>
              </div>
              <div className='w-full h-2 border-2 border-gray-300 bg-white rounded-xl my-2 flex items-center'>
                <div className="bg-bluto w-3/5 h-1 my-1 rounded-xl"></div>
              </div>
            </div>

            {/* Single Skill */}
            <div className="my-1">
              <div className="flex justify-between items-center  w-full ">
                <p className='font-semibold text-deep '>Nest Js</p>
                <p className='text-gray-500'>70%</p>
              </div>
              <div className='w-full h-2 border-2 border-gray-300 bg-white rounded-xl my-2 flex items-center'>
                <div className="bg-bluto w-70 h-1 my-1 rounded-xl"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Resume