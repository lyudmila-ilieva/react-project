import React from 'react';
import style from './Main.module.css'

function Main() {
return (
    <div className={style.mainContainer}>
        <img src="img-home.jpg" alt="Home" />
        <div>
          <h3>Home page</h3>
        </div>
    </div>
  )
}

export default Main;