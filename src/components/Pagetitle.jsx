import React from 'react'

const Pagetitle = (props) => {
    return (

        <div className='font-pop font-semibold text-4xl border-b border-gray-200
         text-deep py-10 w-90 mx-auto'>
            {props.title}
        </div>
    )
}

export default Pagetitle