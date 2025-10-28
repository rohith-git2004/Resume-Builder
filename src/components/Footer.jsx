import React from 'react'
import {MdAttachEmail } from "react-icons/md"
import {FaPhoneAlt } from "react-icons/fa";
import {FaWhatsapp } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
import {FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'300px',backgroundColor:'purple',color:'white'}}
    className='d-flex justify-content-center align-items-center p-5 flex-column'>
      <h3> Contact Us</h3>
      <h5 className='fw-bolder'><MdAttachEmail /> resumebuilder@gmail.com</h5>
      <h5 className='fw-bolder'><FaPhoneAlt /> 9087654321</h5>
      <h4>Connect With Us</h4>
      <div className='d-flex justify-content-center fs-4 my-3'>
        <FaWhatsapp className='me-3'/>
        <FaInstagram className='me-3'/>
        <FaFacebookF />
      </div>
    </div>
  )
}

export default Footer