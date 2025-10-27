import React from 'react'
import Pagetitle from '../components/Pagetitle';
import './pages.scss'
import ExperienceSection from '../sections/Experience';

const Resume = () => {
  return (
    <div>
      <Pagetitle title="RESUME" />
      <ExperienceSection/>

      {/* SKills */}
      <div className="resume_skills">
        <h4>Skills</h4>
        <div className="underline2"></div>

        <div className="skills_inner">
          {/* Left Column */}
          <div className="skills_left">
            <div className="skill_group">
              <h5>Programming</h5>
              <p>JavaScript, TypeScript, PHP</p>
            </div>

            <div className="skill_group">
              <h5>Database</h5>
              <p>MySQL, MongoDB</p>
            </div>

            <div className="skill_group">
              <h5>WordPress</h5>
              <p>Elementor Pro, Custom Post Types, Advanced Custom Fields</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="skills_right">
            <div className="skill_group">
              <h5>Web</h5>
              <p>HTML, CSS, Tailwind CSS, React, Node.js, Express.js, Next.js, Redux Toolkit</p>
            </div>

            <div className="skill_group">
              <h5>Tech</h5>
              <p>Microsoft Office, Git / GitHub, VS Code, Postman, JIRA</p>
            </div>
          </div>
        </div>
      </div>
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
            <div className='resume_part'>

              <div className="part_top">
                <div className='part_date'>
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

            {/* Codemen */}
            <div className='resume_part'>

              <div className="part_top">
                <div
                  className='part_date'
                >
                  May, 2023 - Current
                </div>
                <span >Codemen Solutions LTD</span>
              </div>

              <div className='part_bottom'>
                <h5 >Associate Software Engineer</h5>
                <span> Dhaka, Bangladesh</span>
              </div>

            </div>

            {/* Softlab */}
            <div className='resume_part'>

              <div className="part_top">
                <div
                  className='part_date'
                >
                  Sep, 2022 - Nov, 2022
                </div>
                <span >SoftLab IT</span>
              </div>

              <div className='part_bottom'>
                <h5 >Intern Full Stack Developer</h5>
                <span> Dhaka, Bangladesh</span>
              </div>

            </div>

          </div>
        </div>

      </div>      

    </div>
  )
}

export default Resume