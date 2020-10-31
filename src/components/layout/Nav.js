import React, {useState} from "react";

import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";


const Nav = ({location}) => {
  const [checkbox, setCheckbox] = useState(false)

  const handleMenuClick = () => {
    setCheckbox(false)
  }

  const handleBurgerClick = () => {
    if(checkbox===false) {
      setCheckbox(true)
    }else {
      setCheckbox(false)
    }
  }

  // console.log(location);
  return (
    <nav className={location.pathname==='/' || location.pathname==='/flacky-meble/' ? "home": 'main-nav'}>
      <div className="container">
        <div className="logo-container">
          <h1 className="logo">
            <NavLink exact to='/'> <span className="name-1">FLACKY</span>
            <span className="name-2"> COMBINATION MEBLE</span>
            <p className="logo-desc"> <span>MEBLE na MIARĘ</span> Twoich potrzeb</p>
            </NavLink>
          </h1>
        </div>

        <input type="checkbox" checked={checkbox} name="hamburger-btn" id="toggle"/>
        <label className="toggle" htmlFor="toggle" onClick={handleBurgerClick}>
          <div className="menu-btn">
            <div className="menu-btn__burger"></div>
          </div>
        </label>


        <ul className="menu hamburger-nav">
          <li className="nav-item services" onClick={handleMenuClick}>
            <NavLink exact to='/uslugi'>Nasze usługi</NavLink>
          </li>
          <li className="nav-item about" onClick={handleMenuClick}>
            <NavLink exact to='/onas'>O nas</NavLink>
          </li>
          <li className="nav-item portfolio" onClick={handleMenuClick}>
            <NavLink exact to='/projekty'>Zrealizowane projekty</NavLink>
          </li>
          <li className="nav-item calculator" onClick={handleMenuClick}>
            <NavLink exact to='/kalkulator'>Wycena projektu</NavLink>
          </li>
          <li className="nav-item contact" onClick={handleMenuClick}>
            <NavLink exact to='/kontakt'>Kontakt</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export const NavWithRouter = withRouter(Nav);

