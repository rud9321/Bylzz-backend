const mongoose = require('mongoose');
const config = require('../config/config');

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(config.database.uri, config.database.options);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  
  module.exports = connectDB;