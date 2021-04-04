import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Main.module.css';

//STATELESS CLASS COMPONENT
class Main extends React.Component {

  constructor(props) {
  super(props)
  }

  render(){
  return (
    <div className={style.mainContainer}>
         <img src="img-home.jpg" alt="Home" />
         <h3>If you want to view all offers you have to
           <NavLink to="/sign-in" className={style.homeLink} exact={true}>&nbsp;&nbsp;sign in&nbsp;&nbsp;</NavLink>
         or
         <NavLink to="/sign-up" className={style.homeLink} exact={true}>&nbsp;&nbsp;register </NavLink></h3>
     </div>
  )}
}
  
export default Main;

// STATELESS FUNCTIONAL COMPONENT

// function Main() {

//   return (

//     <div className={style.mainContainer}>
//          <img src="img-home.jpg" alt="Home" />
//          <h3>If you want to view all offers you have to
//            <NavLink to="/sign-in" className={style.homeLink} exact={true}>&nbsp;&nbsp;sign in&nbsp;&nbsp;</NavLink>
//          or
//          <NavLink to="/sign-up" className={style.homeLink} exact={true}>&nbsp;&nbsp;register </NavLink></h3>
//      </div>
//   )
// }
  
// export default Main;