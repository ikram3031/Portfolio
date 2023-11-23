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
                  Dec, 2022 - Nov, 2023
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

      {/* SKills */}
      <div className='resume_skills'>
        <h4 >Skills</h4>
        <div className='underline2'></div>

        {/* Skills inner Section */}
        <div className="skills_inner" >

          {/* Left */}
          <div className='skills_left'>

            {/* Single Skill */}
            <div className='single_skill'>

              <div className="skill">
                <h5 >HTML, CSS</h5>
                <span>100%</span>
              </div>

              <div className='progress_bar'>
                <div className="progress"></div>
              </div>
            </div>

            {/* Single Skill */}
            <div className='single_skill'>

              <div className="skill">
                <h5 >Javascript</h5>
                <span>90%</span>
              </div>

              <div className='progress_bar'>
                <div className="progress90"></div>
              </div>
            </div>

            {/* Single Skill */}
            <div className='single_skill'>

              <div className="skill">
                <h5 >React</h5>
                <span>75%</span>
              </div>

              <div className='progress_bar'>
                <div className="progress75"></div>
              </div>
            </div>

            {/* Single Skill */}
            <div className='single_skill'>

              <div className="skill">
                <h5 >Node js</h5>
                <span>80%</span>
              </div>

              <div className='progress_bar'>
                <div className="progress80"></div>
              </div>
            </div>

            {/* Single Skill */}
            <div className='single_skill'>

              <div className="skill">
                <h5 >Next js</h5>
                <span>70%</span>
              </div>

              <div className='progress_bar'>
                <div className="progress65"></div>
              </div>
            </div>

          </div>

          {/* Right */}
          <div className='skills_right'>

            {/* Single Skill */}
            <div className='single_skill'>

              <div className="skill">
                <h5 >Wordpress Theme Customization</h5>
                <span>95%</span>
              </div>

              <div className='progress_bar'>
                <div className="progress95"></div>
              </div>
            </div>

            {/* Single Skill */}
            <div className='single_skill'>

              <div className="skill">
                <h5 >Elementor Pro</h5>
                <span>90%</span>
              </div>

              <div className='progress_bar'>
                <div className="progress90"></div>
              </div>
            </div>

            {/* Single Skill */}
            <div className='single_skill'>

              <div className="skill">
                <h5 >MS Office</h5>
                <span>70%</span>
              </div>

              <div className='progress_bar'>
                <div className="progress70"></div>
              </div>
            </div>

            {/* Single Skill */}
            <div className='single_skill'>

              <div className="skill">
                <h5 >Postman</h5>
                <span>80%</span>
              </div>

              <div className='progress_bar'>
                <div className="progress80"></div>
              </div>
            </div>

            {/* Single Skill */}
            <div className='single_skill'>

              <div className="skill">
                <h5 >VS Code</h5>
                <span>65%</span>
              </div>

              <div className='progress_bar'>
                <div className="progress65"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Resume