import React, { useState } from 'react'
import './header.css'
import NavBar from '../NavBar/NavBar'
import profileImg from '../assets/image-avatar.png'
import cartImg from '../assets/icon-cart.svg'
import logo from '../assets/logo.svg'
import menuImg from '../assets/icon-menu.svg'



const Header = ({ toggleCartVis, quantity }) => {




  return (


    <div id='header-comp-div'>


      <div id='header-container'>

        <NavBar />
        <div className='menu-icon-container'>


          <div className="menu">
            <ul id='menu-row'>
              <li>Collections</li>

              <li>Men</li>

              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          {/* 
      <button className='menu-icon'>

          <img src={menuImg} alt="" />
        </button> */}


          <div className='sneaker-logo-container' style={{ marginLeft: '5px' }}>


            <img src={logo} alt="" />
          </div>
        </div>




        <div className='header-icons-container'>


          <div className='cart-icon-container'>

            <button className='cart-icon' onClick={toggleCartVis} style={{ marginLeft: '50px', outline: 'none', marginRight: '10px' }} >
              <img src={cartImg} alt="" />
            </button>
            <p style={{ color: 'white', textAlign: 'center', marginRight: '2px' }} className='shopping-cart-quantity'>{quantity}</p>



            <div className='profile-image-container'>
            </div>


            <img src={profileImg} alt="" className='profile-img' />
          </div>




        </div>
        {/* <p style={{width: '20px', height: '20px', color: 'red'}}>{quantity}</p> */}

      </div>
    </div>
  )
}

export default Header
