import React, {useState, useEffect} from 'react'
import './Nav.css'
import {FaSearch} from 'react-icons/fa'
import {GiPresent} from 'react-icons/gi'
import {BsFillBellFill} from 'react-icons/bs'
const Nav = () => {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    return (
        <div className={`nav ${show && "navBlack"}`}>
            {/* if show is true, then I want to append the navBlack class */}
            <img 
            className="navLogo"
            src="https://i.ibb.co/7rY62mt/netflix-PNG11.png"
            alt="Netflix Logo"
            
            />
            <div id='navigation'>
              <ul className='left'>
              <li class='navbar'><a href="#">Home</a></li>
              <li class='navbar'><a href="#">TV Shows</a></li>
              <li class='navbar'><a href="#">Movies</a></li>
              <li class='navbar'><a href="#">New & Popular</a></li>
              <li class='navbar'><a href="#">My List</a></li>
              </ul>  
            </div>

            <div className='browse'>
                <li className="browse1">Browse ▼</li>
            </div>
            
            <div id='secondary'>
                        <ul className="right">

                        <li class='second'><a href="#"><BsFillBellFill /></a></li>
                        <li class='second'><a href="#"><GiPresent /></a></li>
                        <li class='second1'><a href="#">DVD</a></li>
                        <li class='second2'><a href="#">KIDS</a></li>
                        <li class='second'><a href="#"><FaSearch /></a></li>
                        </ul>

                        </div>
            <img 
            className="smileLogo"
            src="https://i.ibb.co/SrtNgXH/30db479e1558c3ed46b4ed23b3cd98ae.png"
            alt="Smile Logo"
            
            />

            
            
        </div>
    )
}

export default Nav
