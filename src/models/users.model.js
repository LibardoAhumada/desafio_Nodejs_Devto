
const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        trim: true,
      },
      lastName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        trim: true,
      },
      email: {
        type: String,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        trim: true,
        required: true,
      },      
      password: {
        type: String,
        required: true,
        trim: true,
      },
      profilePic: {
        type: String,
      },    
      created_at: {
        type: Date,
        required: true,
        default: new Date(),
      },
      updated_at: {
        type: Date,
        required: true,
        default: new Date(),
      },
    });
    
    module.exports = mongoose.model("user", usersSchema);
