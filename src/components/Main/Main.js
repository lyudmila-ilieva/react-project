import React from 'react';
import style from './Main.module.css';

function Main() {
return (
    <div className={style.mainContainer}>
        <h1 className={style.h1}>Home Page</h1>
        <img src="img-home.jpg"/>
        <h1 className={style.h1}>Home Page</h1>
    </div>
  )
}

export default Main;