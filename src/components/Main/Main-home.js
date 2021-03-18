import React from 'react';
import style from './Main.module.css';

function Main() {
return (
    <div className={style.mainContainer}>
        <img src="img-home.jpg" alt="Home" />
        <h3>Home page</h3>
    </div>
  )
}

export default Main;