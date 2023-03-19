import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       <nav className='pt-3' id="navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSd_2Tp-8DxFwaNP6WYEZw5r5MWrWaiwHuRy1DRs6qxvJxQVqg/viewform?usp=sf_link" target="__blank">Contact us</a></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar
