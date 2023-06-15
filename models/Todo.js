//  Models will include information about the data like length of string , whether it is required or not etc

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  description: {
    type: String,
    required: true,
    maxLength: 150,
  },
  createdAt: {
    type: Date,
    requird: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    requird: true,
    default: Date.now(),
  },    
});

module.exports = mongoose.model("Todo" , todoSchema)