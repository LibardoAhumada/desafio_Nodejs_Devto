const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    trim: true,
    ref: "user",
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

module.exports = mongoose.model("post", postsSchema);
