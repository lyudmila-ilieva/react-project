import { Link } from 'react-router-dom';

import Button from '../../Button/Button';
import style from './Main-login.module.css';

import content from './formContentLogin';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required('Required field').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email'),
  password: yup.string().required('Required field').min(5, 'Password must be at least 5').max(15, 'Password must be less than 15'),
});
 const SignIn = () => {
    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema),
      });
      
      const onSubmit = (data) => console.log(data)
      
        return (
          <div>
            <div className={style.mainContainerRegister}>
            <img src="img-login.jpg" alt="Register" />
            <form className={style.formLogin} onSubmit={handleSubmit(onSubmit)}>
            <p className={style.formRegisterHeading}>Sign In</p>
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
                <Button type="submit" buttonStyle={'btn-register'}>Login</Button>
                </p>
                <p>Need an account? <Link to="/sign-up" className={style.registerLink}>REGISTER</Link></p>
            </form>
          </div>
          </div>
        )
}

export default SignIn;