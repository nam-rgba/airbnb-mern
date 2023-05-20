const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

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

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  res.json({ name, email, password });
});

app.post("/login", (rep, res) => {
  const { email, password } = req.body;

  res.json({ email, password });
});

app.listen(4000);
//test git
