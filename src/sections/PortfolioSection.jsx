import React from 'react'
import SinglePortfolio from './SinglePortfolio'

const PortfolioSection = () => {
    return (
        <div className='w-90 mx-auto flex flex-col gap-5 justify-center items-center py-10'>
            <span className='text-base font-normal text-r font-alata'>
                VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
            </span>
            <h2 className='text-bl text-5xl font-bold font-pop'>
                My Portfolio
            </h2>

            <SinglePortfolio/>

        </div>
    )
}

export default PortfolioSection