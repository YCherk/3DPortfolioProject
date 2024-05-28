import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ className }) => {
  return (
    <header className={`header flex justify-between items-center px-6 h-16 ${className}`}>
        <NavLink to="/" className="w-10 h-10 flex items-center justify-center font-semibold">
            <p className={`font-bold text-2xl ${className}`}>
                YC
            </p>
        </NavLink>
        <nav className={`flex text-lg gap-10 font-medium ${className}`}>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-zinc-700' : `${className}`}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-zinc-700' : `${className}`}>
                Projects
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-zinc-700' : `${className}`}>
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
