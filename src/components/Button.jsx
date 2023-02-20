import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <Link to='/contact' className="pt-5 cursor-pointer max-w-40 mt-10">
      <span className='bg-gradient-to-r from-blu via-bluform to-bluto
   text-light flex items-center justify-center
    px-2 py-2 rounded-md hover:bg-bluto
    transition duration-500 ease-in-out
    '>
        {props.text}
      </span>
    </Link>
  )
}

export default Button