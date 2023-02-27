import React from 'react';
import './pages.scss';

import Hero from '../sections/Hero';
import PortfolioSection from '../sections/PortfolioSection';
import WhatDoIDo from '../sections/WhatDoIDo';

const Home = () => {
  return (
    <div className='home '>
      <div className='home_container '>

        {/* HEro section */}
        <Hero />

        {/* What DO I DO */}
        <WhatDoIDo />

        <PortfolioSection />
      </div>
    </div>
  )
}

export default Home