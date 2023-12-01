import React from 'react'
import girl from '../assets/brooke-cagle-WHWYBmtn3_0-unsplash.jpg'
import { FaPuzzlePiece } from "react-icons/fa6";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa";
export default function Solution() {
    return (
        <>
            <div className="solution flex">
                <div className="section">
                    <div className="girl-image">
                        <img src={girl} alt="" />
                    </div>
                    <div className="half-circle"></div>
                    <div className="half-circle2"></div>
                    <div className="half-circle3"></div>
                </div>
                <div className="work">
                    <div className="line"></div>
                    <p className='text-[12px] font-bold text-[#0055ff]'>WHAT WE ARE DOING</p>
                    <h2>Changing The Way To Do Best Buisness Solution</h2>
                    <p className='text-[13px] text-[#8a8888]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione labore totam. Possimus delectus aspernatur laborum reprehenderit porro nihil. Quaerat atque iste culpa, voluptas ratione quas soluta consequatur et perspiciatis?</p>
                </div>

            </div>
            <div className="cards">
                <div className="card1">
                    <div className="upper">
                        <div className="icon"><FaPuzzlePiece /></div>
                        <h4>Quality Services</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="card1">
                    <div className="upper">
                        <div className="icon"><RiLightbulbFlashLine /></div>
                        <h4>Quality Services</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="card1">
                    <div className="upper">
                        <div className="icon"><FaChartLine /></div>
                        <h4>Quality Services</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </>
    )
}
