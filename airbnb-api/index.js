const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const Rooms = require("./models/Rooms");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();



app.use(cors({
	credentials: true,
	origin: true
}));


app.use(express.json());
app.use(cookieParser());

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "AJwefD809uasdj29a8ASasj28S";


//0n772csUcpn9EfCI
mongoose.connect(process.env.MONGO_URL);

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
      timeCreate: new Date(),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(422).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  try {
    const userDoc = await User.findOne({ email });
    if (userDoc) {
      const checkPs = bcrypt.compareSync(password, userDoc.password);
      if (checkPs) {
        jwt.sign(
          { email: userDoc.email, id: userDoc._id, name: userDoc.name },
          jwtSecret,
          {},
          (error, token) => {
            if (error) {
              throw error;
            }
            res
              .cookie("token", token, {
                maxAge: 3600 * 1000,
                secure: true,
                sameSite: "none",
              })
              .json(userDoc);
            console.log("ok");
            console.log(userDoc);
          }
        );
      } else {
        res.status(422).json("pass is not same");
      }
    } else {
      res.json("user not found");
    }
  } catch (error) {}
});

app.get("/profile", (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (errors, data) => {
      if (errors) throw errors;
      const { name, email, _id, timeCreate } = await User.findById(data.id);
      res.json({ name, email, _id, timeCreate });
    });
  } else {
    res.json(null);
  }
});


app.get('/users',(req,res)=>{

  mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (errors, data) => {
      if (errors) throw errors;
      const users = await User.find({});
      res.json(users);
    });
  } else {
    res.json(null);
  }
})

app.post("/logout", (req, res) => {
  res.cookie("token", "").json();
});

app.get("/places", async (req, res) => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const rooms = await Rooms.find({});
    res.json(rooms);
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/user-places", (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const { id } = userData;
    res.json(await Place.find({ owner: id }));
  });
});


app.listen(4000);
