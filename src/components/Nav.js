import React from "react";

import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";


const Nav = ({location}) => {

  // console.log(location);
  return (
    <nav className={location.pathname==='/' || location.pathname==='/flacky-meble' ? "home": 'main-nav'}>
      <div className="container">
        <div className="logo-container">
          <h1 className="logo">
            <NavLink exact to='/flacky-meble'> <span className="name-1">Flacky</span>
            <span className="name-2"> combination</span>
            <p className="logo-desc"> <span>MEBLE na MIARĘ</span> Twoich potrzeb</p>
            </NavLink>
          </h1>
        </div>

        <input type="checkbox" name="hamburger-btn" id="toggle"/>
        <label className="toggle" htmlFor="toggle">
          <div className="menu-btn">
            <div className="menu-btn__burger"></div>
          </div>
        </label>


        <ul className="menu hamburger-nav">
          <li className="nav-item services">
            <NavLink exact to='/uslugi'>Nasze usługi</NavLink>
          </li>
          <li className="nav-item about">
            <NavLink exact to='/onas'>O nas</NavLink>
          </li>
          <li className="nav-item portfolio">
            <NavLink exact to='/projekty'>Zrealizowane projekty</NavLink>
          </li>
          <li className="nav-item calculator">
            <NavLink exact to='/kalkulator'>Wycena projektu</NavLink>
          </li>
          <li className="nav-item contact">
            <NavLink exact to='/kontakt'>Kontakt</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export const NavWithRouter = withRouter(Nav);

