import { useRef } from "react";
import { FaBars, FaTimes, FaLongArrowAltRight } from "react-icons/fa";
import logo from '../assets/logo.png'
import '../style/header.scss'
import { FaArrowRight } from 'react-icons/fa6'
import { RiArrowDropDownLine } from 'react-icons/ri'
function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <h3>   <a href='/'><img src={logo} alt="" /></a></h3>
            <nav ref={navRef}>
                <a href="/">Work <RiArrowDropDownLine /> </a>
                <a href="/about">Solution <RiArrowDropDownLine /></a>
                <a href="/certificates">Resource <RiArrowDropDownLine /></a>
                <a href="/newsPaper">About <RiArrowDropDownLine /></a>
                <a href='/account'> <button className="button2">Contact Us
                    <div className="ribbon"><FaArrowRight /></div>
                </button>

                </a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;