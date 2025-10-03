import React from 'react'
import { FaArrowRight, FaCopyright, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='border-t rounded-3xl p-10 mt-10 border-gray-500 w-full'>
      <div className='flex justify-between'>
        <div>
          <p>Welcome to the End. Should I consider this as ​you liked my portfolio ?</p>
        </div>
        <div>
          <p className='mb-2 text-white'>Malay Chitodkar</p>
          <div className='flex gap-2'>
          <a href='https://www.instagram.com/_malay.jpg_' target='_blank' className='text-2xl text-pink-500 cursor-pointer'><FaInstagram/></a>
          <a href='https://www.linkedin.com/in/malay431/' target='_blank' className='text-2xl text-blue-400 cursor-pointer'><FaLinkedin/></a>
          <a href='https://github.com/Malay431' target='_blank' className='text-2xl cursor-pointer'><FaGithub/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
