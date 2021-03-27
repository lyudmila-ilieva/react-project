import './Header.css';
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from "../../Auth";
import firebase from "../../firebase";

function Header() {

  const { currentUser } = useContext(AuthContext);

  const logOut = () => {
    firebase.auth().signOut();
  };

  if(currentUser) {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              CASA de AURORA
            </Link>
          </div>
          
          <ul className="nav-menu">
            {/* <li className="nav-item">
            <p className="nav-greeting">Welcome, {currentUser.email}</p>
            </li> */}
            <li className="nav-item">
              <NavLink activeStyle={{fontSize: '1.1em'}} exact={true} to="/about" className="nav-links">
                About us                  
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeStyle={{fontSize: '1.1em'}} exact={true} to="/contacts" className="nav-links">
                Contacts                  
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeStyle={{fontSize: '1.1em'}} exact={true} to="/account" className="nav-links">
                My Account                  
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeStyle={{fontSize: '1.1em'}} exact={true} onClick={logOut} to="/sign-in" className="nav-links">
                Sign Out                 
              </NavLink>
            </li>
            <li className="nav-item">
            <p className="nav-greeting">Welcome, {currentUser.email}</p>
            </li>
          </ul>
        </nav>            
      </>
    )
  } else if(!currentUser) {
    return (
        <>
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo">
                CASA de AURORA
              </Link>
            </div>
            <ul className="nav-menu">
              <li className="nav-item">
                <NavLink activeStyle={{fontSize: '1.1em'}} exact={true} to="/about" className="nav-links">
                  About us                  
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{fontSize: '1.1em'}} exact={true} to="/contacts" className="nav-links">
                  Contacts                  
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{fontSize: '1.1em'}} exact={true} to="/sign-up" className="nav-links">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{fontSize: '1.1em'}} exact={true} to="/sign-in" className="nav-links">
                  Sign In                  
                </NavLink>
              </li>
            </ul>
          </nav>            
        </>
    )
  }
}

export default Header;