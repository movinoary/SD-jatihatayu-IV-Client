import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { DataNavBeranda } from './data';
import './style.css'

const Nav = () => {
  const [click, setClick] = useState (false);
  const [navbar, setNavbar] = useState (false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if(window.scrollY >= 20) {
        setNavbar(true)
    } else {
        setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
      <div className='menu-icon' onClick={handleClick} >
                <i className={click ? 'fas fa-times' : 'fas fa-bars' } />
            </div>
        <ul className={click ? "nav-menu active" : "nav-items" }>
          {DataNavBeranda.map((item) => {
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path} onClick={closeMobileMenu}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Nav
