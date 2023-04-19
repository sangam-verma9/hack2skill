require("dotenv").config();
const express = require("express");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
const auth = require("./middleware/auth");
const app = express();
const port = process.env.PORT;
const pathname = path.join(__dirname, "../public");

app.use(express.static(pathname));

app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./db/conn");
const model = require("./models/model");
const mongoose = require("mongoose");
app.get("/", (req, res) => {
  res.send("home");
});
app.get("/login", (req, res) => {
  res.send("login");
});
app.get("/register", (req, res) => {
  res.send("register");
});
app.get("/secret", auth, (req, res) => {
  // console.log(`this is token: ${req.cookies.jwt}`)
  res.send("secret");
});
// app.get("/logout", auth, async (req, res) => {
//   try {
//     //*** clear from web browser cookie***
//     res.clearCookie("jwt");

//     // ***remove jwt from database for one device ***

//     req.user.tokens = req.user.tokens.filter((currelement) => {
//       return currelement.token !== req.token;
//     });

//     // *** sign out from all devices or delete all jwt from database***
//     // req.user.tokens=[];

//     console.log("logout succesfully");
//     await req.user.save();
//     res.send("login");
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// kissan form fill
app.post("/farmer", async (req, res) => {
  // console.log("hello");
  try {
    const formerdata = new model({
      name: req.body.name,
      mobileno: req.body.mobileno,
      productname: req.body.productname,
      quantity: req.body.quantity,
      address: req.body.address,
      imgid: req.body.imgid,
    });
    const registered = await formerdata.save();
    console.log(registered);
    // alert("form submitted successfully");
    // res.status(201).send("index");
  } catch (error) {
    console.log(error);
  }
});

// app.post("/register", async (req, res) => {
//   try {
//     const password = req.body.password;
//     const cpassword = req.body.conformpassword;
//     // console.log(req.body.password);
//     if (password === cpassword) {
//       const employeedata = new Register({
//         firstname: req.body.firstName,
//         lastname: req.body.lastName,
//         age: req.body.age,
//         gender: req.body.gender,
//         email: req.body.email,
//         phoneno: req.body.phoneno,
//         password: req.body.password,
//         conformpassword: req.body.conformpassword,
//       });

//       const token1 = await employeedata.generateAuthToken();
//       // console.log(token1);
//       //cookie
//       res.cookie("jwt", token1, {
//         expires: new Date(Date.now() + 60000),
//         httpOnly: true,
//       });
//       // console.log(cookie);

//       const registered = await employeedata.save();
//       // alert("form submitted successfully")
//       res.status(201).render("index");
//     } else {
//       res.send("password not match");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
// app.post("/login", async (req, res) => {
//   try {
//     const email = req.body.email;
//     const password = req.body.password;
//     // console.log(`${email} and ${password}`);
//     const employeedata = await Register.findOne({ email: email });
//     const ispassword = await bcrypt.compare(password, employeedata.password);

//     const token2 = await employeedata.generateAuthToken();
//     // console.log(token2);

//     res.cookie("jwt", token2, {
//       expires: new Date(Date.now() + 600000),
//       httpOnly: true,
//     });

//     if (ispassword) {
//       res.send("index");
//     } else {
//       res.send("Invalid login details");
//     }
//   } catch (error) {
//     res.status(400).send("Invalid login details");
//   }
// });

// const bcrypt= require("bcryptjs");

// const securepassword=async(password)=>{
//    const hashpassword=await bcrypt.hash(password,10);
//     console.log(hashpassword);
//     const match= await bcrypt.compare("sangam@34",hashpassword);
//     console.log(match)
// }
// securepassword("sangam@34")

// jwt othentiction user cookies
// const jwt =require("jsonwebtoken");

// const createtoken =async ()=>{
//     const token = await jwt.sign({_id:"63bd01b71ecda5aba0fc2b96"},"mynameissangmavermaiamfromsitapuruttarpardesh");
//     console.log(token)
//     const verityuser= await jwt.verify(token,"mynameissangmavermaiamfromsitapuruttarpardesh");
//     console.log(verityuser)
// }
// createtoken();

app.listen(port, () => {
  console.log(`listening at port ${port}...`);
});
