import React from 'react';
import Button from '../Button/Button';
import style from './Main.module.css';


function Main() {
return (
    <div className={style.mainContainerRegister}>
        <section className={style.formRegister}>
        <p className={style.formRegisterHeading}>Register now</p>
        <div className={style.inputArea}>
        <form method="POST">
            <p>
            Username
            </p>
        <input type="text" name="username" placeholder="*Username" className="footer-input"/>
        </form>
        <form>
            <p>
            Password
            </p>
        <input type="text" name="password" placeholder="*Password" className="footer-input"/>
        </form>
        <form>
            <p>
            Repeat Password
            </p>
        <input type="text" name="repeat-password" placeholder="*Repeat Password" className="footer-input"/>
        </form>
        <Button buttonStyle={'btn-primary'}>Register</Button>
        </div>
        </section>
    </div>
  )
}

export default Main;