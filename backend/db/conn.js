const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/Hack2skill")
  .then(() => {
    console.log("connection succesfully created...");
  })
  .catch((e) => {
    console.log(e);
  });
