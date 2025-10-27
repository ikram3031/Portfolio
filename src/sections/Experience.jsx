import React from 'react';
import './ExperienceSection.scss';

const ExperienceSection = () => {
  return (
    <div className='resume_section'>
      <h4>
        Professional Experience
        <div className='underline2'></div>
      </h4>

      {/* Codemen Solutions */}
      <div className='resume_part'>
        <div className='part_top'>
          <div className='part_date'>May 2023 – Present</div>
          <span>Codemen Solutions Inc</span>
        </div>
        <div className='part_bottom'>
          <h5>Associate Software Engineer (Frontend)</h5>
          <span>Dhaka, Bangladesh</span>
        </div>
        <ul className='experience_points'>
          <li>Translated Figma designs into functional, responsive Next.js interfaces.</li>
          <li>Created and integrated Next.js APIs and Elsa Workflows to enhance backend communication.</li>
          <li>Planned and implemented Master Data Management (MDM) for active projects.</li>
          <li>Implemented new features and improved existing functionalities based on client requirements.</li>
          <li>Fixed UI/UX bugs and optimized performance to improve system stability.</li>
          <li>Utilized AG Grid and Syncfusion to build dynamic, data-driven interfaces.</li>
          <li>Worked closely with junior teammates and successfully led a front-end project from planning to deployment.</li>
        </ul>
      </div>

      {/* Softlab IT */}
      <div className='resume_part'>
        <div className='part_top'>
          <div className='part_date'>Sep 2022 – Oct 2022</div>
          <span>Softlab IT</span>
        </div>
        <div className='part_bottom'>
          <h5>Intern Full Stack Developer</h5>
          <span>Dhaka, Bangladesh</span>
        </div>
        <ul className='experience_points'>
          <li>Developed backend APIs using Nest.js and seamlessly integrated them into the frontend.</li>
          <li>Implemented responsive Angular web pages based on Figma designs.</li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceSection;
