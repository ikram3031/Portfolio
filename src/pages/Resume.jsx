import React from 'react'

const Resume = () => {
  return (
    <div className='container mx-auto py-20'>

      <div className='font-pop font-semibold text-4xl border-b border-gray-200 text-deep pb-10 mb-10'>Resume</div>

      <div className='flex gap-5 justify-between items-center'>
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
                className='rounded-2xl px-3 py-1 border-3 border-bluto text-base text-para'
              >
                2023
              </div>
              <span className='text-base text-para'>Rajshahi University Of Engineering & Technology</span>
            </div>

            <div className='mx-20 px-1 py-1'>
              <div className='text-lg font-semibold text-deep'>Electronics & Telecommunication Engineering</div>
              <div className='text-sm text-gray-500'>Rajshahi, Bangladesh</div>
            </div>
          </div>
          {/* NDC */}
          <div className='flex flex-col'>

            <div className="flex gap-4 justify-start items-center pt-5">
              <div
                className='rounded-2xl px-3 py-1 border-3 border-bluto text-base text-para'
              >
                2015
              </div>
              <span className='text-base text-para'>Notre Dame College</span>
            </div>

            <div className='mx-20 px-1 py-1'>
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
                className='rounded-2xl px-3 py-1 border-3 border-bluto text-base text-para'
              >
                Sep, 2022 - Oct, 2022
              </div>
              <span className='text-base text-para'>SoftLab IT</span>
            </div>

            <div className='ml-52 px-1 py-1'>
              <div className='text-lg font-semibold text-deep'>Intern Software Engineer</div>
              <div className='text-sm text-gray-500'> Dhaka, Bangladesh</div>
            </div>
          </div>
          {/* NDC */}
          <div className='flex flex-col'>

            <div className="flex gap-4 justify-start items-center pt-5">
              <div
                className='rounded-2xl px-3 py-1 border-3 border-bluto text-base text-para'
              >
                Jan, 2022 - Apr, 2022
              </div>
              <span className='text-base text-para'>Yrban Tech</span>
            </div>

            <div className='ml-52 px-1 py-1'>
              <div className='text-lg font-semibold text-deep'>Frontend Developer</div>
              <div className='text-sm text-gray-500'>Rajshahi, Bangladesh</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Resume