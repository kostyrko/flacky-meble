import React from "react";

import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";


const Nav = ({location}) => {

  console.log(location);
  return (
    <div className={location.pathname==='/' ? "home": 'main-nav'}>
      <div className="container">
        <h1 className="logo">
        {/* <a href="/">Flacky <span>Combination</span></a> */}
        <NavLink exact to='/'>Logo</NavLink>
        </h1>
      
      <ul className="nav">
        <li className="nav_link services">
          <NavLink exact to='/uslugi'>Nasze usługi</NavLink>
        </li>
        <li className="nav_link about">
          <NavLink exact to='/onas'>O nas</NavLink>
        </li>
        <li className="nav_link portfolio">
          <NavLink exact to='/projekty'>Zrealizowane projekty</NavLink>
        </li>
        <li className="nav_link calculator">
          <NavLink exact to='/kalkulator'>Wycena projektu</NavLink>
        </li>
        <li className="nav_link contact">
          <NavLink exact to='/kontakt'>Kontakt</NavLink>
        </li>
      </ul>
    </div>
    </div>
  );
}
export const NavWithRouter = withRouter(Nav);

