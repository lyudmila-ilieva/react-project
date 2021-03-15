import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
          <nav className={style.navbar}>
            <div className={style.container}>
              <Link to="/" className={style.logo}>
                  CASA de AURORA
              </Link>
            </div>
            <ul>
              <li className={style.item}>
                <Link to="/" className={style.links}>
                  Home
                </Link>
              </li>
              <li className={style.item}>
                <Link to="/" className={style.links}>
                  About us                  
                </Link>
              </li>
              <li className={style.item}>
                <Link to="/" className={style.links}>
                  Contacts                  
                </Link>
              </li>
            </ul>
          </nav>            
        </>
    )
}

export default Header;