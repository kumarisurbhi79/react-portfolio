import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"

function Navbar() {
  return (
    <nav className='navbar'>
    <div className='nav-left'>
        <div className='logo'>KS</div>
        <span className='name'>Kumari Surbhi</span>
    </div>
    <ul className='nav-right'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Skills">Skills</Link></li>
        <li><Link to="/Project">Project</Link></li>
        <li><Link to="/Stats">Stats</Link></li>
        <li><Link to="/">Contact</Link></li>
    </ul>
    </nav>
  )
}

export default Navbar