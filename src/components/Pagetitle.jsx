import React from 'react'

const Pagetitle = (props) => {
    return (

        <div className='font-pop font-semibold text-4xl border-b border-gray-200 text-deep pb-10 '>
            {props.title}
        </div>
    )
}

export default Pagetitle