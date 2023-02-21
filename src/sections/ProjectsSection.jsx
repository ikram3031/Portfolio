import React from 'react';
import Img from '../uploads/responsive.png';
import Img2 from '../uploads/youtube.png';
import { Link } from 'react-router-dom';

export const ProjectsSection = () => {
    return (
        <div className='bg-bg mx-auto p-5  flex flex-col gap-5 items-center '>

            {/* Single Portfolio */}
            <div className="flex w-90 mx-auto gap-10 items-center p-10 bg-port single_portfolio rounded-md my-10 ">
                {/* left */}
                <div className='w-1/2'>
                    <img className='h-80 w-60px object-contain rounded-md' src={Img} alt="" />
                </div>

                {/* Right */}
                <div className='w-1/2'>
                    <span className='font-pop text-3xl text-bl '>
                        Modern Responsive UI Website
                    </span>


                    <div className="flex justify-between align-center mt-10">
                        <span className='font-pop text-base font-normal py-5 '>
                            Project Type: &nbsp;
                            <span className='text-bl'>Frontend Development</span>
                        </span>
                    </div>
                    <span className='font-pop text-base font-normal py-5 mb-10'>
                        Technology:&nbsp;
                        <span className='text-bl'>React</span>
                    </span>


                    <a href='http://website.mdikramul.xyz/' target='_blank' className="pt-5 cursor-pointer w-1/4 mx-auto">
                        <span className='btn'
                        >
                            View Live
                        </span>
                    </a>
                </div>
            </div>

            {/* Single Portfolio Version 2*/}
            <div className="flex gap-10 w-90 mx-auto items-center p-10 bg-port single_portfolio rounded-md my-10">

                {/* Left */}
                <div className='w-1/2'>
                    <span className='font-pop text-3xl text-bl'>
                        Youtube Clone
                    </span>


                    <div className="flex justify-between align-center mt-10">
                        <span className='font-pop text-base font-normal py-5'>
                            Project Type: &nbsp;
                            <span className='text-bl'>Frontend Development</span>
                        </span>
                    </div>
                    <span className='font-pop text-base font-normal py-5 mb-10'>
                        Technology:&nbsp;
                        <span className='text-bl'>React, Rapid API </span>
                    </span>


                    <Link to='/contact' className="pt-5 cursor-pointer w-1/4 mx-auto ">
                        <span className='btn'
                        >
                            View Live
                        </span>
                    </Link>
                </div>

                {/* Right */}
                <div className='w-1/2'>
                    <img className='h-80 w-60px object-contain rounded-md' src={Img2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection