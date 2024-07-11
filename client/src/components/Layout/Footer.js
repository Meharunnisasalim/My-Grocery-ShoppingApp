import React from 'react'
import {Link} from 'react-router-dom';
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer bg-warning'>
      <h4 className='text-center'>All Rights Reserved <FaRegCopyright /> :Grocery App </h4>
      <p className='text-center mt-3'>
        <Link to='about'>About</Link>|<Link to='contact'>Contact</Link>|
        <Link to='policy'>Policy</Link>
      </p>
    </div>
  )
}

export default Footer
