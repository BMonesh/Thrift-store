import React from 'react'
import '../Styles/navBar.css'
// import { button, Dropdown } from 'react-bootstrap'

import Help from "../assets/help.png"
import Track from "../assets/track.png"
import Flag from "../assets/flag.png"
import Menu from "../assets/menu.png"
import Search from "../assets/search.png"
import Cart from "../assets/cart.png"
import logo from "../assets/Pure Threads.png"

const navBar = () => {
  return (
    <>
     <div className="navbar1">
        <div id='left-element'>
            <a>Daily Deals</a>
            <a>Sell on Thrift Store</a>
            <a>Gift Cards</a>
        </div>
        <div id='right-elements'>
            <a><img src={Help} alt="help"/><p>Help</p></a>
            <a><img src={Track} alt="help"/><p>Track Order</p></a>
            <a><img src={Flag} alt="region"/><p>India/Rupees</p></a>
        </div>
     </div>
     <div className='navbar2'>
        <img src={Menu} alt="menu"/>
        <img src={logo} alt="logo" id='logo' />
        <div id='directs'>
            <p>Categories <select name="" id=""></select></p>
            <p>Deals <select name="" id=""></select></p>
            <p>What's New <select name="" id=""></select></p>
        </div>
       <div className="search">
        <div id='searchbar'>
            <span id="all-link">All</span>
            <p>|</p>
            <input type="text" placeholder="Search for items, brands, or categories" />
        </div>
        <button id="search-button"><img src={Search} alt="search" /></button>
       </div>
        <a id='sign-in'>Sign in</a>
        <img src={Cart} id='cart' alt="cart" />
     </div>
    </>
  )
}

export default navBar
