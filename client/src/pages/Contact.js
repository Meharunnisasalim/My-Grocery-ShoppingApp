import React from 'react'
import Layout from '../components/Layout/Layout'
import '../Styles/pages.css';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";

const Contact = () => {
  return (
    <Layout title={"Best offers-shop now"}>
      <div className='contact mt-5 gap-5'>
      <img className="contact-img ml-5" src='/images/contactus.jpeg' alt='contactus'></img>
      <div className='contactus'>
      <span className='contact-span'>CONTACT US</span>
      <p>Is there any Query or info about product feel free to call any time .We 24*7 Available<br/>
      <span><MdEmail/>:WWW.help@FreshCartApp.com </span><br/>
      <span><IoCall/> :012:3452679</span><br/>
      <span><CiHeadphones/>:1800 0000-0000(toll free)</span></p>
      </div>
    </div>
    </Layout>
    
  )
}

export default Contact
