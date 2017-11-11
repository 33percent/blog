    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/blog');
    var userschema = mongoose.Schema({
      name: String,
      email: String,
      password:String,
      phone: String,
      admin : Boolean
    });
    
    var users = mongoose.model("users", userschema);
module.exports = users;

