import './Header.css';
import { Link, NavLink } from 'react-router-dom';
// import firebase from "../../firebase";

function Header() {

  // const logOut = () => {
  //   firebase.auth().signOut();
  // };

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
                <NavLink activeStyle={{fontSize: '1.3em'}} exact={true} to="/about" className="nav-links">
                  About us                  
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{fontSize: '1.3em'}} exact={true} to="/contacts" className="nav-links">
                  Contacts                  
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{fontSize: '1.3em'}} exact={true} to="/sign-up" className="nav-links">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{fontSize: '1.3em'}} exact={true} to="/sign-in" className="nav-links">
                  Sign In                  
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <Link activeStyle={{fontSize: '1.3em'}} exact={true} onClick={logOut} className="nav-links">
                  Sign Out                  
                </Link>
              </li> */}
            </ul>
          </nav>            
        </>
    )
}

export default Header;