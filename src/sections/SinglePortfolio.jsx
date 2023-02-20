import React from 'react';
import Img from '../uploads/southeast.png';
import Img2 from '../uploads/admedi.png'
import { Link } from 'react-router-dom';

const SinglePortfolio = () => {
    return (
        <div className='bg-bg mx-auto p-5  flex flex-col gap-5 items-center '>

            {/* Single Portfolio */}
            <div className="flex gap-10 items-center p-10 bg-port single_portfolio rounded-md ">
                {/* left */}
                <div className='w-1/2'>
                    <img className='h-80 w-auto rounded-md' src={Img} alt="" />
                </div>

                {/* Right */}
                <div className='w-1/2'>
                    <span className='font-pop text-3xl text-bl '>
                        South East Asia Manpower Company Website
                    </span>


                    <div className="flex justify-between align-center mt-10">
                        <span className='font-pop text-base font-normal py-5 '>
                            Client: &nbsp;
                            <span className='text-bl'>Snp Manpower Agency </span>
                        </span>
                        <span className='font-pop text-base font-normal py-5'>
                            Date:&nbsp;
                            <span className='text-bl'>17-02-2023</span>
                        </span>
                    </div>
                    <span className='font-pop text-base font-normal py-5 mb-10'>
                        Services:&nbsp;
                        <span className='text-bl'> Wordpress Development</span>
                    </span>


                    <Link to='https://admedi.net/' className="pt-5 cursor-pointer w-1/4 mx-auto">
                        <span className='btn'
                        >
                            View Live
                        </span>
                    </Link>
                </div>
            </div>

            {/* Single Portfolio Version 2*/}
            <div className="flex gap-10 items-center p-10 bg-port single_portfolio rounded-md my-10">

                {/* Left */}
                <div className='w-1/2'>
                    <span className='font-pop text-3xl text-bl'>
                        Admedi Marketing Agency Website
                    </span>


                    <div className="flex justify-between align-center mt-10">
                        <span className='font-pop text-base font-normal py-5'>
                            Client: &nbsp;
                            <span className='text-bl'>Kh Shawon Ahmed</span>
                        </span>
                        <span className='font-pop text-base font-normal py-5'>
                            Date:&nbsp;
                            <span className='text-bl'>05-02-2023</span>
                        </span>
                    </div>
                    <span className='font-pop text-base font-normal py-5 mb-10'>
                        Services:&nbsp;
                        <span className='text-bl'>Wordpress Development , All Contents </span>
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
                    <img className='h-80 w-auto rounded-md' src={Img2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SinglePortfolio