import React from 'react'
import { GiTrophyCup } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import dot from '../assets/dots-with-cut.bde9e78f.png'

import buisnessWwoman from '../assets/pexels-anna-nekrashevich-6203795.jpg'
export default function Goal() {
    return (
        <>
            <div className="container">
                <div className="left">
                    <div className="experience">Year of Experience</div>
                    <h1>Innovative Business Solutions for Financial Company</h1>
                    <p>Morem ipsum dolor sit amet, consectetur adipiscing elita florai psum dolor sit amet, consecteture. Borem ipsumdolor sitamo amet, consectetur adipiscing elita florai psum.</p>
                    <br />
                    <p>Morem ipsum dolor sit amet, consectetur adipiscing elita florai psum dolor sit amet, consecteture. Borem ipsum dolor sitamo amet, consectetur adipiscing elita florai psum</p>
                    <br />
                    <p>Gorem ipsum dolor sit amet, consectetur adipiscing elita florai psum dolor sit amet, consecteture.Borem</p>
                    <br />
                    <div className="box">
                        <div className="award">
                            <GiTrophyCup className='icon' />
                            <div className="line"></div>
                            <div className="number">
                                <h2>235+ </h2>
                                <p className='text-[16px]'>Best Award</p>
                            </div>
                        </div>
                        <div className="award">
                            <div className="icon">
                                <CgProfile className='text-[60px]' />
                            </div>
                            <div className="line"></div>
                            <div className="number">
                                <h2>98K</h2>
                                <p className='text-[16px] '>Happy Client</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="business-goal">
                        <h3 className='text-[25px]'>98%</h3>
                        <p className='text-[17px] font-bold blur-[0.5px] mb-[10px]'>Business Goal</p>
                        <div className="bars flex justify-between">
                            <div className="contain">
                                <div className="bar">
                                    <div className="jan"></div>
                                </div>
                                <p className='month'>Jan</p>
                            </div>
                            <div className="contain">
                                <div className="bar">
                                    <div className="feb"></div>
                                </div>
                                <p className='month'>Feb</p>
                            </div>
                            <div className="contain">
                                <div className="bar">
                                    <div className="mar"></div>
                                </div>
                                <p className='month'>Mar</p>
                            </div>

                            <div className="contain">
                                <div className="bar">
                                    <div className="apl"></div>
                                </div>
                                <p className='month'>Apl</p>
                            </div>
                            <div className="contain">
                                <div className="bar">
                                    <div className="may"></div>
                                </div>
                                <p className='month'>May</p>
                            </div>
                        </div>
                    </div>
                    <img src={dot} alt="" className='dot w-[335px] absolute z-[-1] right-[-145px]' />
                    <div className="img1">
                        <img src={buisnessWwoman} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
