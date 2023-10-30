const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
      unique: true
   },
   author: {
      type: String,
      required: true,
      trim: true
   },
   dob_publish: {
      type: Date,
      required: true
   },
   summary: {
      type: String,
      required: true
   }
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;
