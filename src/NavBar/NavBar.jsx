import React, { useState } from 'react'
import './navBar.css'
import closeBtn from '../assets/icon-close.svg'
import menuImg from '../assets/icon-menu.svg'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)


    const toggleMenu = () => {

        setIsOpen(!isOpen)

    }


    return (
        <div id='navbar-comp-div'>
            <div className="mobile-menu-container">
                <button className="menu-toggle" onClick={toggleMenu} style={{ marginTop: '22px', outline: 'none' }}>
                    {isOpen ?
                        <img src={closeBtn} alt="" className='burger-btn' />

                        :
                        <img src={menuImg} alt="" className='burger-btn' />

                    }
                </button>
                {isOpen && (
                    // <div className="menu-dropdown">
                    <div className={`menu-dropdown ${isOpen ? 'open' : ''}`}>
                        <ul>
                            <li>Collections</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>

    )
}

export default NavBar
