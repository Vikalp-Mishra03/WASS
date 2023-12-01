import React from 'react'
import mainImg from '../assets/sonu-agvan-7tGXbK5lH8I-unsplash.jpg'
import { FaArrowRight } from 'react-icons/fa'

export default function Main() {
    return (
        <>
            <div className="wrapper bg-black h-[100vh] flex">

                <div className="text text-white ">
                    <p>👋 HI THERE? I'M MORPHY</p>
                    <h1>CREATIVE & MEDIA SOLUTIONS</h1>
                    <p>We will implement a marketing strategy for your brand. If you would like to achieve more but you do not know how - we will define new direction of</p>
                    <a href='/account'> <button className="button2">Schedule Call
                        <div className="ribbon"><FaArrowRight className='mt-[15px] ml-[5px]' /></div>
                    </button></a>
                </div>
                <div className="img">
                    <img src={mainImg} alt="" />
                </div>

            </div>
        </>
    )
}
