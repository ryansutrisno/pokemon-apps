import React, { useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import { DetailContext } from '../context'

const Navbar = () => {
  const { mypokemons } = useContext(DetailContext)
  const totalPokemon = mypokemons.length
  useEffect(() => {
    const sidenav = document.querySelector('.sidenav')
    M.Sidenav.init(sidenav, {})
  }, [])
  return (
    <nav className="green">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Pokemon Apps
        </Link>
        <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/mypokemon">My Pokemon {totalPokemon}</NavLink>
          </li>
        </ul>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <NavLink to="/mypokemon">My Pokemon {totalPokemon}</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
