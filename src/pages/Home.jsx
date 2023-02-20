import React from 'react';

import Hero from '../sections/Hero';
import PortfolioSection from '../sections/PortfolioSection';
import WhatDoIDo from '../sections/WhatDoIDo';

const Home = () => {
  return (
    <div className=' bg-light'>



      {/* HEro section */}
      <Hero />

      {/* What DO I DO */}
      <WhatDoIDo />

      <PortfolioSection />
      
    </div>
  )
}

export default Home