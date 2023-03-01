import React from 'react'
import Pagetitle from '../components/Pagetitle';
import './pages.scss'

const Resume = () => {
  return (
    <div>
      <Pagetitle title="RESUME" />

      <div className='resume'>
        <div className='resume_main'>

          {/* Education */}
          <div className='resume_section'>

            <h4 >
              Education
              <div className='underline2'></div>
            </h4>

            {/* RUET */}
            <div className='resume_part'>

              <div className="part_top">
                <div
                  className='part_date'
                >
                  2023
                </div>
                <span >Rajshahi University Of Engineering & Technology</span>
              </div>

              <div className='part_bottom'>
                <h5>Electronics & Telecommunication Engineering</h5>
                <span>Rajshahi, Bangladesh</span>
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
          <div className='resume_section'>
            <h4 >
              Experience
              <div className='underline2'></div>
            </h4>

            {/* Softlab */}
            <div className='resume_part'>

              <div className="part_top">
                <div
                  className='part_date'
                >
                  Sep, 2022 - Oct, 2022
                </div>
                <span >SoftLab IT</span>
              </div>

              <div className='part_bottom'>
                <h5 >Intern Software Engineer</h5>
                <span> Dhaka, Bangladesh</span>
              </div>

            </div>
            {/* Yrban */}
            <div className='resume_part'>

              <div className="part_top">
                <div
                  className='part_date'
                >
                  Jan, 2022 - Apr, 2022
                </div>
                <span >Yrban Tech</span>
              </div>

              <div className='part_bottom'>
                <h5>Frontend Developer</h5>
                <span>Rajshahi, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

      </div>



    </div>
  )
}

export default Resume