import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaMailBulk } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import'./contact.css'
export default function Contact() {
  return (
    <>
    <div className="container contact mt-4"id='contact'>
        <h1 className="text-center">CONTACT ME</h1>
        <div className="row contact-icons d-flex justify-content-center align-items-center">
          <a className="col-6 col-sm-4 col-md-3 col-lg-2 items text-center" href='https://www.linkedin.com/in/ali-hassan-565a32252/' target="_blank" rel="noopener noreferrer">
            <CiLinkedin className='icons' />
          </a>
          <a className="col-6 col-sm-4 col-md-3 col-lg-2 items text-center" href='mailto:mianalihassan298jb@gmail.com' target='_blank' rel="noopener noreferrer">
            <FaMailBulk className='icons'/>
          </a>
          <a className="col-6 col-sm-4 col-md-3 col-lg-2 items text-center" href='https://github.com/AliHassan298jb' target='_blank' rel="noopener noreferrer">
            <FaGithub className='icons'/>
          </a>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 item text-center">
            <FaPhoneVolume className='icons'/> +92 3035366298
          </div>
        </div>
      </div>
    </>
  )
}
