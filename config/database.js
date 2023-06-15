const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Db is connected"))
    .catch((e) => {
      console.log("Something went wrong");
      console.log(e);
      process.exit(1);
    });
};

module.exports = dbConnect;
