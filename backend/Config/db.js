const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGO_URI;

async function initialize() {
  if (!mongoUri) {
    throw new Error("MONGO_URI is not set. Add it to backend/.env");
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", {
      uri: mongoUri,
      error: err.message,
    });
    throw err;
  }
}

module.exports = { mongoose, initialize };
