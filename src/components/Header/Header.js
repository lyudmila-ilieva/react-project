// import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  // const [click, setClick] = useState(false);

  // const handleClick = () => {
  //   setClick(!click);
  // }

  // const closeMobileMenu = () => {
  //   setClick(false);
  // }

    return (
        <>
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/our-mission" className="navbar-logo">
                CASA de AURORA
              </Link>
            </div>
            {/* <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}/>
            </div> */}
            <ul className="nav-menu">
              <li className="nav-item">
                <NavLink activeStyle={{fontSize: '1.3em'}} exact={true} to="/" className="nav-links">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{fontSize: '1.3em'}} exact={true} to="/about" className="nav-links">
                  About us                  
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{fontSize: '1.3em'}} exact={true} to="/contact" className="nav-links">
                  Contact                  
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{fontSize: '1.3em'}} exact={true} to="/sign-in" className="nav-links">
                  Sign In                  
                </NavLink>
              </li>
            </ul>
          </nav>            
        </>
    )
}

export default Header;