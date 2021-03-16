import React from 'react';
import style from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
          <nav className={style.navbar}>
            <div className={style.navbarContainer}>
              <Link to="/" className={style.logo}>
                  CASA de AURORA
              </Link>
            </div>
            <ul className={style.navbarMenu}>
              <li className={style.item}>
                <NavLink activeStyle={{fontSize: '1.3em'}} exact={true} to="/" className={style.links}>
                  Home
                </NavLink>
              </li>
              <li className={style.item}>
                <NavLink activeStyle={{fontSize: '1.3em'}} exact={true} to="/about" className={style.links}>
                  About us                  
                </NavLink>
              </li>
              <li className={style.item}>
                <NavLink activeStyle={{fontSize: '1.3em'}} exact={true} to="/contact" className={style.links}>
                  Contact                  
                </NavLink>
              </li>
              <li className={style.item}>
                <Link to="/" className={style.links}>
                  Sign In                  
                </Link>
              </li>
            </ul>
          </nav>            
        </>
    )
}

export default Header;