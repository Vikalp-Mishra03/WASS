import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { RiArrowDropRightLine } from "react-icons/ri";
export default function Newsletter() {
    return (
        <>
            <div className="newletter">
                <div className='phone'>
                    <FaPhoneVolume className='text-[30px]' />
                    <div className="number">
                        <p className='text-[20px]'>Call For More Info</p>
                        <h3 className='text-[30px] font-bold'>+123 8989 444</h3>
                    </div>
                </div>
                <div className="line"></div>
                <h2>Let's Request a Schedule For Free Consultation</h2>
                <div className="contact-us">
                    <p>CONTACT US </p>
                    <div className="icons"><RiArrowDropRightLine /></div>
                </div>
            </div>
        </>
    )
}
