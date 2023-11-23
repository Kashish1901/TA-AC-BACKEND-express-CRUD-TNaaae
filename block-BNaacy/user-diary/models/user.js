var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    age: Number,
    email: String,
    password: { type: String, minlegth: 5 },
  },
  { timestamp: true }
);

var User = mongoose.model("User", userSchema);

module.exports = User;
