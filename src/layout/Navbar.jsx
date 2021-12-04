import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './navbar.css'

const  Navbar = () => {
  return (
    <nav className="container flex mx-auto p-4 justify-between lg:w-screen-lg">
      <Link className="w-full" to="/">
        <img src="/logo.svg" alt="React Query" width="200" />
      </Link>
      <div className="flex">
        <NavLink to="/" exact>
          Basic
        </NavLink>
        <NavLink to="/paginated">Paginated</NavLink>
        <NavLink to="/infinite">Infinite</NavLink>
      </div>
    </nav>
  )
}

export default Navbar