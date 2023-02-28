import React from 'react'
import SinglePortfolio from './SinglePortfolio';
import './Sections.scss'

const PortfolioSection = () => {
    return (
        <div className='portfolio'>

            <h2>
                My Portfolio
                <div className='underline'></div>
            </h2>

            <SinglePortfolio/>
            
        </div>
    )
}

export default PortfolioSection