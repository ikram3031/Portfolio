import React from 'react';
import Img from '../uploads/southeast.png';
import Img2 from '../uploads/admedi.png';
import Img3 from '../uploads/snpcons.png';
import Img4 from '../uploads/ads.png';
import './Sections.scss';

const SinglePortfolio = () => {
    return (
        <div className='single_portfolio'>

            {/* Single Portfolio 1*/}
            <div className="single1">

                {/* Left */}
                <div className='single_left'>
                    <h5>
                        SNP Contruction Company Website
                    </h5>

                    {/* Details */}
                    <div className="single_details">
                        <div className='single_topic'>
                            Client: &nbsp;
                            <span>SNP Group</span>
                        </div>
                        <div className='single_topic'>
                            Date:&nbsp;
                            <span >11-10-2022</span>
                        </div>
                    </div>
                    <span className='single_topic'>
                        Services:&nbsp;
                        <span>Wordpress Development </span>
                    </span>


                    <a target='blank' href='http://snpconstruction.org/'>
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

            {/* Single Portfolio 2*/}
            <div className="single1">

                {/* left */}
                <div className='single_right'>
                    <img src={Img} alt="" />
                </div>

                {/* Right */}
                <div className='single_left'>
                    <h5>
                        South East Asia Manpower Company Website
                    </h5>

                    {/* Details */}
                    <div className="single_details">
                        <div className='single_topic'>
                            Client: &nbsp;
                            <span>Snp Manpower Agency </span>
                        </div>
                        <div className='single_topic'>
                            Date:&nbsp;
                            <span >17-02-2023</span>
                        </div>
                    </div>
                    <span className='single_topic'>
                        Services:&nbsp;
                        <span>Wordpress Development </span>
                    </span>


                    <a target='blank' href='https://southeastasiamanpower.com/'>
                        <span className='btn'
                        >
                            View Live
                        </span>
                    </a>
                </div>

            </div>

            {/* Single Portfolio 3*/}
            <div className="single1">

                {/* Left */}
                <div className='single_left'>
                    <h5>
                        Admedi Marketing Agency Website
                    </h5>

                    {/* Details */}
                    <div className="single_details">
                        <div className='single_topic'>
                            Client: &nbsp;
                            <span>Kh Shawon Ahmed</span>
                        </div>
                        <div className='single_topic'>
                            Date:&nbsp;
                            <span >27-02-2023</span>
                        </div>
                    </div>
                    <span className='single_topic'>
                        Services:&nbsp;
                        <span>Wordpress Development, All Contents </span>
                    </span>


                    <a target='blank' href='https://admedi.net/'>
                        <span className='btn'
                        >
                            View Live
                        </span>
                    </a>
                </div>

                {/* Right */}
                <div className='single_right'>
                    <img src={Img2} alt="" />
                </div>

            </div>

            {/* Single Portfolio 4*/}
            <div className="single1">

                {/* left */}
                <div className='single_right'>
                    <img src={Img4} alt="" />
                </div>

                {/* Right */}
                <div className='single_left'>
                    <h5>
                        IT Company Website
                    </h5>

                    {/* Details */}
                    <div className="single_details">
                        <div className='single_topic'>
                            Client: &nbsp;
                            <span>MD Jesan</span>
                        </div>
                        <div className='single_topic'>
                            Date:&nbsp;
                            <span >27-09-2023</span>
                        </div>
                    </div>
                    <span className='single_topic'>
                        Services:&nbsp;
                        <span>Wordpress Development </span>
                    </span>


                    <a target='blank' href='https://adsandwebdesigningorganizationbd.com/'>
                        <span className='btn'
                        >
                            View Live
                        </span>
                    </a>
                </div>

            </div>

        </div>
    )
}

export default SinglePortfolio