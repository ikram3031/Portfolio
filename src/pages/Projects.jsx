import React from 'react';
import Pagetitle from '../components/Pagetitle';
import  ProjectsSection  from '../sections/ProjectsSection.jsx';

const Projects = () => {
  return (
    <div className='pb-20'>
      <div className='container mx-auto '>
        <Pagetitle title="PROJECTS" />
      </div>

      <ProjectsSection />

    </div>
  )
}

export default Projects