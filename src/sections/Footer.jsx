import React from 'react';
import { Link } from 'react-router-dom';
import Copyright from '../components/Copyright';

const Footer = () => {
  return (
    <div>
      <div className="bg-blu">
        <div className="container mx-auto flex justify-between items-center py-10">
          <div>left</div>
          <div>Center</div>
          <div>Right</div>
          </div> 
      </div>
      <Copyright/>
    </div>
  )
}

export default Footer