import React from 'react'
import girl from '../assets/premium_photo-1661725005424-f2972840d938.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";
import profile from '../assets/shipman-northcutt-sgZX15Da8YE-unsplash.jpg'

import team from '../assets/annie-spratt-MChSQHxGZrQ-unsplash.jpg'
export default function Goal2() {
  return (
    <>
      <div className="wrap flex items-center">
        <div className="left-wrapper">
          <div className="image">
            <img src={girl} alt="" />
          </div>
          <div className="container1">
            <div className="date">
              <div className="day">09</div>
              <div className="year">Years</div>
            </div>
            <div className="line"></div>
            <p className='w-[140px] text-[20px]'>Morem ipsum dolor sit amet</p>
          </div>
          <div className="image2">
            <img src={team} alt="" />
          </div>
        </div>
        <div className="right-wrapper">
          <div className="experience">
            <p>Years of Experience</p>
          </div>
          <h1>Innovative Business Solutions for
            Financial Company</h1>
          <p className='para'>Morem ipsum dolor sit amet, consectetur adipiscing elita florai psum dolor sit amet, consecteture. Borem ipsum dolor sitamo amet, consectetur adipiscing elita florai psum.</p>
          <div className="list">
            <li> <FaLongArrowAltRight className='icon' /> Morem ipsum dolor sit amet,</li>
            <li><FaLongArrowAltRight className='icon' />Morem ipsum dolor sit amet,</li>
            <li><FaLongArrowAltRight className='icon' />Morem ipsum dolor sit amet,</li>
            <li><FaLongArrowAltRight className='icon' />Morem ipsum dolor sit amet,</li>
          </div>
          <p className='para'>Morem ipsum dolor sit amet, consectetur adipiscing elita florai psum dolor sit amet, consecteture.</p>
          <div className="ceo flex items-center">
            <div className="ceo-image">
              <img src={profile} alt="" />
            </div>
            <div className="about-ceo">
              <h3>Mark Stranger</h3>
              <p>CEO, Gerow Finance</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
