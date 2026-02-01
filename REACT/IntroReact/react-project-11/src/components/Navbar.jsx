import { Link , NavLink} from "react-router-dom"
import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <NavLink to="/" className={({isActive}) => isActive ? "active-link": ""}>
      Home
      </NavLink>
      <NavLink to="/about" className={({isActive}) => isActive ? "active-link": ""}>About</NavLink>
      <NavLink to="/dashboard" className={({isActive}) => isActive ? "active-link": ""}>Dashboard</NavLink>
    </nav>
  )
}

export default Navbar
