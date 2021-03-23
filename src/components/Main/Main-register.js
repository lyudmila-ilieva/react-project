import { withRouter } from 'react-router-dom';
import React, { useCallback } from 'react';
import app from '../../Base';
import Button from '../Button/Button';
import style from './Main.module.css';

const SignUp = ({history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
        } catch(error) {
            alert(error)
    }
 }  
 , [history]);

    return (
    <div>
        
      <div className={style.mainContainerRegister}>
      <img src="img-login.jpg" alt="Register" />
     
        <form onSubmit={handleSignUp} className={style.formRegister}>
        <p className={style.formRegisterHeading}>SIGN UP</p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="*Email" className={style.registerInput}/>
       
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" placeholder="*Password" className={style.registerInput}/>
        <label htmlFor="repeat-password">Repeat Password</label>
        <input type="text" name="repeat-password" id="repeat-password" placeholder="*Repeat Password" className={style.registerInput}/>
        <p>
        <Button type="submit" buttonStyle={'btn-register'}>Register</Button>
        </p>
        </form>
      </div>
    </div>
  ) 
}

export default withRouter(SignUp);