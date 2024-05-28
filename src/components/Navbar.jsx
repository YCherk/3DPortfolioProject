import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className= "w-10 h-10 items-center justify-center flex font-semibold">
            <p className= "text-white">
                YC
            </p>
        </NavLink>
        <nav className= "flex text-lg gap-10  font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white' }>
                ABOUT
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white' }>
                PROJECTS
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white' }>
                CONTACT
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar