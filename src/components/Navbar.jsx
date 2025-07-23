import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex  bg-violet-950  justify-between text-gray-200 py-4'>
        <div className="logo  font-bold text-xl mx-9">
          <h2>iTask</h2>
        </div>
        <ul className="flex gap-4 mx-9">
          <NavLink to="/" className={({ isActive }) => `cursor-pointer hover:font-bold transition-all ${isActive ? 'font-bold' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `cursor-pointer hover:font-bold transition-all ${isActive ? 'font-bold' : ''}`}>About</NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
