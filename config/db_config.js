const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DATABASE CONNECTED");
  } catch (error) {
    console.log("DATABASE CAN'T BE CONNECTED");
  }
};

module.exports = { connectDB };
