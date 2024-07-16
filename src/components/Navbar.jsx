import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav>
        <div class="logo">
          <h2 style={{color:"rgb(255, 0, 255)"}}>
          GoXBo.
          </h2>
            
        </div>
        <div class="links">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Explore</Link></li>
            </ul>
        </div>
    </nav>    
    </>
  )
}

export default Navbar
