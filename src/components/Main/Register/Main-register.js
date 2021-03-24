import React, { useCallback } from "react";
import { withRouter, Link } from 'react-router-dom';
import app from "../../../Base";

import Button from '../../Button/Button';
import style from './Main-register.module.css';

import content from './formContentRegister';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//AUTHENTICATION

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
     } 
    catch (error) {
      alert(error)
    }
  }, [history]);

//VALIDATION
const schema = yup.object().shape({
    email: yup.string().required('Required field').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email'),
    password: yup.string().required('Required field').min(6, 'Password must be at least 5').max(15, 'Password must be less than 15'),
    repeat: yup.string().required('Required field').min(6, 'Repeat Password must be at least 5').max(15, 'Password must be less than 15')
  });

const {register, handleSubmit, errors} = useForm({
  resolver: yupResolver(schema),
});

const onChange = (data) => console.log(data)

  return (
    <div>
      <div className={style.mainContainerRegister}>
      <img src="img-login.jpg" alt="Register" />
      <form className={style.formRegister} onChange={handleSubmit(onChange)} onSubmit={handleSignUp}>
      <p className={style.formRegisterHeading}>Register</p>
      {content.inputs.map((input, key) => {      
        return (
          <div key={key}>
            <p className={style.registerElement}>
            <label>{input.label}</label>
            </p>
            <p className={style.registerElement}>
            <input 
              ref={register}
              type={input.type} 
              name={input.name} 
              className={style.registerInput}
             />
            </p>
            <p className={style.messages}>{errors[input.name]?.message}</p>
        </div>  
          );
      })}
          <p>
          <Button type="submit" buttonStyle={'btn-register'}>Register</Button>
          </p>
          <p>Already have an account? <Link to="/sign-in" className={style.loginLink}>LOGIN</Link></p>
      </form>
    </div>)
    </div>
  )
}

export default withRouter(SignUp);