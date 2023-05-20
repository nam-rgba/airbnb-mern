import style from "./register.module.css";
import { Link } from "react-router-dom";
import Image from "../../../Image";
import { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/register", {
      name,
      email,
      password,
    });
  };

  return (
    <div className={style.login}>
      <div className={style.logo}>
        <Link to="/">
          <Image name="airbnb" type="svg" />
        </Link>
      </div>

      <div className={style.form}>
        <form action="" onSubmit={handleSubmit}>
          <h4>Welcome to Airbnb</h4>

          <label htmlFor="email" className={style.hidden_visually}>
            Name
          </label>
          <input
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

          <button>Create account</button>
          <p>
            <span>or</span>
          </p>

          <button className={style.git}>Continue with Github</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
