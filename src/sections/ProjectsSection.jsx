import React from 'react';
import Img from '../uploads/responsive.png';
import Img2 from '../uploads/youtube.png';
import Img3 from '../uploads/Image_Generation.png'
import './Sections.scss';

export const ProjectsSection = () => {
    return (
        <div className='single_portfolio'>

            {/* Single Project1*/}
            <div className="single1">

                {/* Left */}
                <div className='single_left'>
                    <h5>
                        AI Image Generation App
                    </h5>

                    {/* Details */}
                    <div className="single_details">
                        <div className='single_topic'>
                            Project Type: &nbsp;
                            <span>Full Stack</span>
                        </div>
                    </div>
                    <div className='single_topic'>
                        Technology:&nbsp;
                        <span >React , Node js</span>
                    </div>


                    <a target='blank' href='http://ai.mdikramul.xyz/'>
                        <span className='btn'
                        >
                            View Live
                        </span>
                    </a>
                </div>

                {/* Right */}
                <div className='single_right'>
                    <img src={Img3} alt="" />
                </div>

            </div>

            {/* Single Project 2*/}
            <div className="single1">

                {/* left */}
                <div className='single_right'>
                    <img src={Img2} alt="" />
                </div>

                {/* Right */}
                <div className='single_left'>
                    <h5>
                        Youtube Clone
                    </h5>

                    {/* Details */}
                    <div className="single_details">
                        <div className='single_topic'>
                            Project Type: &nbsp;
                            <span>Frontend Development</span>
                        </div>
                    </div>
                    <div className='single_topic'>
                        Technology:&nbsp;
                        <span >React </span>
                    </div>


                    <a href='http://youtube.mdikramul.xyz/'>
                        <span className='btn'
                        >
                            View Live
                        </span>
                    </a>
                </div>

            </div>

            {/* Single Project 3*/}
            <div className="single1">

                {/* Left */}
                <div className='single_left'>
                    <h5>
                        Modern Responsive UI Website
                    </h5>

                    {/* Details */}
                    <div className="single_details">
                        <div className='single_topic'>
                            Project Type: &nbsp;
                            <span>Frontend Development</span>
                        </div>
                    </div>
                    <div className='single_topic'>
                        Technology:&nbsp;
                        <span >React</span>
                    </div>


                    <a target='blank' href='http://ai.mdikramul.xyz/'>
                        <span className='btn'
                        >
                            View Live
                        </span>
                    </a>
                </div>

                {/* Right */}
                <div className='single_right'>
                    <img src={Img} alt="" />
                </div>

            </div>

        </div>
    )
}

export default ProjectsSection