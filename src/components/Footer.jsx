import React from 'react'
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { SiGmail } from 'react-icons/Si'
import { MdMessage } from 'react-icons/Md'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col p-2 bg-gray-800 text-center text-white font-pop'>
      <div className='flex flex-col xs:flex-row justify-between items-center m-2 w-full max-w-[1280px] mx-auto text-2xl text-left'>
        <div>
          <span
            className={`text-white font-medium bg-primary p-1 px-2.5 mr-2.5 rounded-full`}>
            M
          </span>
          Mateen Ahmed
        </div>
        <div className='flex items-center mt-5 xs:mt-0'>
          <a href='https://www.google.com/maps/@24.884498,67.047415,16z?hl=en' className="flex items-center justify-center p-2 m-2 mx-4 cursor-pointer">
            <FaMapMarkerAlt className="text-xl" />
          </a>
          <a href='mailto:mateensoomro737@gmail.com' className="flex items-center justify-center p-2 m-2 mx-4 cursor-pointer">
            <SiGmail className="text-xl" />
          </a>
          <a href='tel:+923363040789' className="flex items-center justify-center p-2 m-2 mx-4 cursor-pointer">
            <FaPhone className="text-xl" />
          </a>
          <Link to="/contact" className="flex items-center justify-center p-2 m-2 mx-4 cursor-pointer">
            <MdMessage className="text-xl" />
          </Link>
        </div>
      </div>
      <hr className='w-full max-w-[1280px] mx-auto mb-3 border-b border-neutral-600' noshade="true" />
      <div className='max-w-[1280px] mx-auto text-xs xs:text-sm'>
        &copy; Copyright 2023, Made by <span className='underline text-primary'>Mateen Ahmed</span>
      </div>
    </div>
  )
}

export default Footer