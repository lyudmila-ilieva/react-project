import React, { useCallback, useContext} from 'react';
import { withRouter, Redirect, NavLink } from 'react-router-dom';
import app from '../../Base';
import { AuthContext } from '../../Auth';

import Button from '../Button/Button';
import style from './Main.module.css';

const SignIn = ({history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
        } catch(error) {
            alert(error)
    }
 }  
 , [history]);


 //const { currentUser } = useContext(AuthContext);
 //if(currentUser) {
    
 //    return <Redirect to="/" />
 //}
 
    return (
        <div>
        <div className={style.mainContainerRegister}>
        <img src="img-login.jpg" alt="Login" />
        {/* <section className={style.formLogin}> */}
        {/* <div className={style.inputArea}> */}
        <form onSubmit={handleSignUp} className={style.formLogin}>
        <p className={style.formRegisterHeading}>SIGN IN</p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="*Email" className={style.loginInput}/>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" placeholder="*Password" className={style.loginInput}/>
        <Button type="submit" buttonStyle={'btn-register'}>Login</Button>
        <p className={style.registerLink}>If you don't have account: <NavLink to="/sign-up" className={style.registerLink} exact={true}>REGISTER</NavLink></p>
        </form>
        {/* </div> */}
        {/* </section> */}
    </div>
    </div>
    )
}

export default withRouter(SignIn);