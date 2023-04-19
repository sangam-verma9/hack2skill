const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const hack2skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobileno: {
    type: Number,
    required: true,
  },
  productname: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  imgid: {
    type: String,
  },
});

//generating token
hack2skillSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign(
      { _id: this._id.toString() },
      process.env.SECRET_KEY
    );
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    // res.send(error);
    console.log(error);
  }
};

// secure password

hack2skillSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    // console.log(`the current password is ${this.password}`);
    this.password = await bcrypt.hash(this.password, 10);
    // console.log(`the current password is ${this.password}`);
    this.conformpassword = await bcrypt.hash(this.password, 10);
    // this.conformpassword=undefined;
  }
  next();
});

// for collection
const model = new mongoose.model("Register", hack2skillSchema);
module.exports = model;
