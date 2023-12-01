import React from 'react'
import logo from '../assets/logo.png'
import { AiFillInstagram } from "react-icons/ai";
import { GiIndiaGate } from "react-icons/gi";
import { FaLinkedin, FaFacebook, FaPinterest, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Footer() {
    return (
        <>
            <footer className='bg-black text-white'>
                <div className="places">
                    <div className="card1">
                        <div className="icons"><GiIndiaGate /></div>
                        <div className="place">
                            <h3>Mumbai</h3>
                            <p>128 Jodhpur Gardens, South City
                                Mall, Kolkata, West Bengal 700045</p>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="icons"><GiIndiaGate /></div>
                        <div className="place">
                            <h3>Kolkata</h3>
                            <p>128 Jodhpur Gardens, South City
                                Mall, Kolkata, West Bengal 700045</p>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="icons"><GiIndiaGate /></div>
                        <div className="place">
                            <h3>Pune</h3>
                            <p>128 Jodhpur Gardens, South City
                                Mall, Kolkata, West Bengal 700045</p>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="icons"><GiIndiaGate /></div>
                        <div className="place">
                            <h3>Bangalore</h3>
                            <p>128 Jodhpur Gardens, South City
                                Mall, Kolkata, West Bengal 700045</p>
                        </div>
                    </div>
                </div>
                <div className="branding">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="line"></div>
                    <p>128 Jodhpur Gardens, South City Mall, Kolkata, West Bengal 700045</p>
                    <div className="line"></div>
                    <div className="link">
                        <a href="business@webappssoft.com">business@webappssoft.com</a> <br />
                        <a href="sales@webappssoft.com">sales@webappssoft.com</a>
                    </div>
                    <div className="line text-white"></div>
                    <div className="media text-[20px]"><AiFillInstagram /> <FaLinkedin /> <FaFacebook /> <FaPinterest /> <FaYoutube /> <FaSquareXTwitter /></div>
                </div>
                <p className='text-[15px] p-7 text-center'>WebApps Software Solution We propose a unique model of ‘Communication Co-creation. It is a form of market or business strategy that emphasizes the greater realization of therelationship between a brand & its customers. It treats markets as forums for brands and active customers to unite, share and renew each other's resources and capabilities to createvalue through new forms of interaction, service and learning mechanisms. This kind of communication intends to involve the consumers in brand communication. It discovers innovativeways to connect with the target groups and make them respond to the brand. The entire objective is to uplift the customers from the ‘PASSIVE’ mode and make them active participants in brand communication.</p>

                <div className="services">
                    <div className="box">
                        <h2>App Development</h2>
                        <p>App Developer In Bangalore <br />
                            App Developer In Kolkata <br />
                            IOS App Developer In Bangalore <br />
                            Socail Media <br />
                            App Developer In Kolkata</p>
                    </div>
                    <div className="line2"></div>
                    <div className="box">
                        <h2>App Development</h2>
                        <p>App Developer In Bangalore <br />
                            App Developer In Kolkata <br />
                            IOS App Developer In Bangalore <br />
                            Socail Media <br />
                            App Developer In Kolkata</p>
                    </div>
                    <div className="line2"></div>
                    <div className="box">
                        <h2>App Development</h2>
                        <p>App Developer In Bangalore <br />
                            App Developer In Kolkata <br />
                            IOS App Developer In Bangalore <br />
                            Socail Media <br />
                            App Developer In Kolkata</p>
                    </div>
                    <div className="line2"></div>
                    <div className="box">
                        <h2>App Development</h2>
                        <p>App Developer In Bangalore <br />
                            App Developer In Kolkata <br />
                            IOS App Developer In Bangalore <br />
                            Socail Media <br />
                            App Developer In Kolkata</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
