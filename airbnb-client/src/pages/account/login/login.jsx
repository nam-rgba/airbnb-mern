import style from './login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../../contexts/UserContext';
import { FcGoogle } from 'react-icons/fc';
import { PrimaryButton, SecondaryButton, Input } from '../../../Component';
import logo from '../../../assets/logo/airbnb.svg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const userDoc = await axios
        .post('/auth/login', { email, password }, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          return res.data;
        });
      setUser(userDoc.data);

      alert('Login successfully');
      return navigate('/');
    } catch (error) {
      alert('Login failed!');
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
        <form action="" onSubmit={handleSubmitLogin}>
          <h4>
            Welcome to Airbnb, lets discover new places, new people, new you!
          </h4>
          <p>Welcome back, please sign in to continue</p>
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
            <PrimaryButton>Sign in</PrimaryButton>

            <SecondaryButton>
              Google <FcGoogle style={{ marginLeft: '5px' }} size={20} />{' '}
            </SecondaryButton>
          </div>

          <p className={style.register}>
            If your have not had a account yet,{' '}
            <Link to="/account/register">Register here</Link>{' '}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
