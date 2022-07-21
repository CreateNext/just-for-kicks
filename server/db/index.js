const mongoose = require("mongoose");
require("dotenv").config();
const { DB_STRING } = process.env;

const dbConnect = async () => {
  try {
    await mongoose.connect(DB_STRING, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("MongoDB connection successfull 🚀");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
