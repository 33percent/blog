var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/blog');
// var subscriptionschema = mongoose.Schema({
//   name: String,
//   email: String
// });
// var subs = mongoose.model("subscriptions", subscriptionschema);
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

// router.post('/emailsub', function (req, res, next) {
//   // "use strict";
//   var sendata = {
//     err: '',
//     response: 0
//   };
//   var newsub = new subs({
//     name: req.body.name,
//     email: req.body.email
//   });
//   newsub.save(function (err, data) {
//     if (err) {
//       console.log(err);
//       sendata.err = err;
//       sendata.response = 0;
//       res.json(sendata);
//     } else {
//       console.log(data);
//       sendata.response = 1;
//       res.json(sendata);
//     }
//   });
// });

// router.get('/temp',function(req,res,next){
//   var newsub = new subs ({
//     name:String,
//     email : String
//   });
//   db.newsub.find(function(err,data){
//     if(err){
//      console.log(err);
//       res.send(err);
//     } else {
//       res.send(data);
//     }
//   })
// })
module.exports = router;
