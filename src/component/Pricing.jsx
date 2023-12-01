import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
export default function Pricing() {
    return (
        <>
            <div className="main-heading">
                <h1 className='text-center'>Flexible Pricing.</h1>
                <p className='text-center text-[20px] font-bold'>Flexible and affording plans tailored to your needs. Save 
                    up to %20 for a limited time.</p>
            </div>

            <div className="enterprise-boxes flex justify-around">
                <div className="info ">
                    <h2>Enterprise</h2>
                    <div className="price ">
                        <h3>$89</h3>
                        <p>/month</p>
                    </div>
                    <div className="contact-info">Contact us more information.</div>
                    <div className="item">
                        <li><FaCheck className='check' /> 300 Words</li>
                        <li><FaCheck className='check' />Limiter Use</li>
                        <li><FaCheck className='check' />Volume Based Pricing</li>
                        <li><FaCheck className='check' />Analytics and Reporting</li>
                        <li><FaCheck className='check' />API Access</li>
                    </div>

                    <div className="button1"><MdElectricBolt />JOIN THIS PLAN</div>
                </div>
                <div className="info ">
                    <h2>Enterprise</h2>
                    <div className="price">
                        <h3>$89</h3>
                        <p>/month</p>
                    </div>
                    <div className="contact-info">Contact us more information.</div>
                    <div className="item">
                        <li><FaCheck className='check' /> 300 Words</li>
                        <li><FaCheck className='check' /> Limiter Use</li>
                        <li><FaCheck className='check' /> Volume Based Pricing</li>
                        <li><FaCheck className='check' /> Analytics and Reporting</li>
                        <li><FaCheck className='check' /> API Access</li>
                    </div>

                    <div className="button1"><MdElectricBolt />JOIN THIS PLAN</div>
                </div>
                <div className="info ">
                    <h2>Enterprise</h2>
                    <div className="price">
                        <h3>$89</h3>
                        <p>/month</p>
                    </div>
                    <div className="contact-info">Contact us more information.</div>
                    <div className="item">
                        <li><FaCheck className='check' /> 300 Words</li>
                        <li><FaCheck className='check' /> Limiter Use</li>
                        <li><FaCheck className='check' /> Volume Based Pricing</li>
                        <li><FaCheck className='check' /> Analytics and Reporting</li>
                        <li><FaCheck className='check' /> API Access</li>
                    </div>

                    <div className="button1"><MdElectricBolt />JOIN THIS PLAN</div>
                </div>
            </div>
        </>
    )
}
