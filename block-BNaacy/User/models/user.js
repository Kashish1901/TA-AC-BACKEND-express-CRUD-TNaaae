var mongoose = require("mongoose");
var Schema = mongoose.Schema();

var userSchema = new Schema({
  name: { type: String, require: true },
  email: String,
  age: {
    type: Number,
    default: 0,
  },
  password: { type: String, minlength: 5 },
});

var User = mongoose.model("User", userSchema);

module.exports = User;
