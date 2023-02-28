import React from 'react';
import './components.scss'

const Pagetitle = (props) => {
    return (
        <div className='page_title'>
            {props.title}
        </div>
    )
}

export default Pagetitle