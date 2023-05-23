const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcrypt");
require("dotenv").config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
// app.use(
//   cors({
//     credentials: true,
//     origin: "http://127.0.0.1:5173",
//   })
// );

console.log(process.env.MONGO_URL);
//0n772csUcpn9EfCI
mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(422).json(error);
  }
});

app.post("/login", (rep, res) => {
  const { email, password } = req.body;

  res.json({ email, password });
});

app.listen(4000);
//test git
