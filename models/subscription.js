var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');
var subscription = mongoose.Schema({
  name: String,
  email: String,
});

var subscription = mongoose.model("subscription", subscription);
module.exports = subscription;

