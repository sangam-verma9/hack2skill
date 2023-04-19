const jwt = require("jsonwebtoken");
const Register = require("../models/model");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const verifyuser = jwt.verify(token, process.env.SECRET_KEY);
    // console.log(verifyuser);

    const user = await Register.findOne({ _id: verifyuser._id });
    // console.log(user.firstname);

    req.user = user;
    req.token = token;

    next();
  } catch (error) {
    res.status(400).send("first login or signup then you allow in this page");
  }
};

module.exports = auth;
