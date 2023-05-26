import style from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../../Image";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/login", { email, password });
      alert("Login successfully");
      // setRedirect(true);
      return navigate("/");
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
    <div className={style.login}>
      <div className={style.logo}>
        <Link to="/">
          <Image name="airbnb" type="svg" />
        </Link>
      </div>

      <div className={style.form}>
        <form action="" onSubmit={handleSubmitLogin}>
          <h4>Welcome to Airbnb</h4>
          <label htmlFor="email" className={style.hidden_visually}>
            Email
          </label>
          <input
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
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button>Sign in</button>

          <p>
            <span>or</span>
          </p>

          <button className={style.git}>Continue with Github</button>
          <p className={style.register}>
            If your have not had a account yet,{" "}
            <Link to="/account/register">Register here</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
