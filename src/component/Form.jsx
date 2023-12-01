import React from 'react'
import logo from '../assets/logo.png'
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaFacebook, FaPinterest, FaYoutube, FaSkype, FaArrowRight } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import rating from '../assets/Screenshot (65).png'
export default function Form() {
    return (
        <>
            <div className="form">
                <h2>Innovative Business Solutions for Financial Company</h2>
                <p>Morem ipsum dolor sit amet, consectetur adipiscing elita florai psum dolor sit amet, consecteture. Borem ipsum dolor sitamo amet, consectetur adipiscing elita florai psum.</p>
            </div>

            <div className="form-box">
                <div className="media">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <p>Tech Makes Reality</p>
                    </div>
                    <div className="media-icon">
                        <div className="icon"><FaLinkedin /></div>
                        <div className="icon"><FaFacebook /></div>
                        <div className="icon"><AiFillInstagram /></div>
                        <div className="icon"><FaPinterest /></div>
                        <div className="icon"><FaSquareXTwitter /></div>
                        <div className="icon"><FaYoutube /></div>
                    </div>
                    <div className="contact mt-7 w-[72%]">
                        <IoIosMail className='text-[50px]' />
                        <div className="address text-[14px] ">
                            <h5>Mail to our Sales Department</h5>
                            <p>info@webappsoft.com</p>
                        </div>
                    </div>
                    <div className="contact">
                        <FaSkype className='text-[50px]' />
                        <div className="address text-[14px] w-[65%]">
                            <h5>Our Skype ID</h5>
                            <p>SKYPPEaddress</p>
                        </div>
                    </div>
                    <div className="contact">
                        <IoLogoWhatsapp className='text-[50px]' />
                        <div className="address text-[14px] w-[65%]">
                            <h5>WhatsApp Number</h5>
                            <p>+91 9763500291</p>

                        </div>
                    </div>
                    <div className="rating flex">
                        <img src={rating} alt="" />
                        <p>By 700+ clients for 1500+ Web and Mobile App projects</p>
                    </div>
                </div>
                <div className="enquiry">
                    <h2>Enquiry Details</h2>
                    <hr />

                    <div className="input p-14">
                        <div className="first">
                            <input type="text" placeholder='Your Name' />
                            <input type="text" placeholder='Your Company' />
                            <input type="text" placeholder='Your City/location' />
                        </div>
                        <div className="first">
                            <input type="mail" placeholder='Your buisness email' />
                            <input type="number" placeholder='Your Mobile Number' />
                            <input type="text" placeholder='Skype ID' />
                        </div>
                        <div className="first">

                            <input type="text" placeholder='Your Budget' />
                            <input type="text" placeholder='Your Product Service Name' />
                            <input type="file" placeholder='File/Attachment' className='w-[26%]' />
                        </div>
                    </div>
                    <div className="button flex item-center justify-center">

                        <a href='/account'> <button className="button2 bg-black text-white">Hire App Developrs
                            <div className="ribbon"><FaArrowRight className='mt-[18px] ml-3' /></div>
                        </button> </a>
                    </div>
                </div>
            </div>
        </>
    )
}
