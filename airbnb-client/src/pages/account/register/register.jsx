import style from './register.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { PrimaryButton, SecondaryButton, Input } from '../../../Component';
import logo from '../../../assets/logo/airbnb.svg';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post('/user/create', {
        name,
        email,
        password
      });
      alert('Registation successfully!');
    } catch (error) {
      alert('Registation failed!');
    }
  };

  return (
    <div className={style.login}>
      <div className={style.logo}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className={style.form}>
        <form action="" onSubmit={handleSubmit}>
          <h4>
            Welcome to Airbnb, lets discover new places, new people, new you!
          </h4>
          <p>Welcome back, please sign in to continue</p>

          <label htmlFor="email" className={style.hidden_visually}>
            Name
          </label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="John .Cruise..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="email" className={style.hidden_visually}>
            Email
          </label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label htmlFor="password" className={style.hidden_visually}>
            Password
          </label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className={style.buttons}>
            <PrimaryButton>Sign up</PrimaryButton>

            <SecondaryButton>
              Google <FcGoogle style={{ marginLeft: '5px' }} size={20} />{' '}
            </SecondaryButton>
          </div>
          <p className={style.register}>
            If your already have a account,{' '}
            <Link to="/account/login">Login here</Link>{' '}
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
