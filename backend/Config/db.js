const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGO_URI;
let connectionPromise;

async function initialize() {
  if (!mongoUri) {
    throw new Error("MONGO_URI is not set. Add it to backend/.env");
  }

  if (mongoose.connection.readyState === 1) return mongoose.connection;

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(mongoUri)
      .then(() => {
        console.log("MongoDB connected");
        return mongoose.connection;
      })
      .catch((err) => {
        connectionPromise = undefined;
        console.error("MongoDB connection failed:", { error: err.message });
        throw err;
      });
  }

  return connectionPromise;
}

module.exports = { mongoose, initialize };
