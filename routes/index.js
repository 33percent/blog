var express = require('express');
var router = express.Router();
var subscription = require('../models/subscription');
router.get('/', function (req, res) {
  res.render('index1', { title: 'Express' });
});

router.get('/short/:id',function(req,res,next){
  var indexer = 'short'+req.params.id;
res.render(indexer);
  });



router.post('/emailsub', function (req, res, next) {
  // "use strict";
  var sendata = {
    err: '',
    response: 0
  };
  subscription.findOne({ 'email': req.body.email }, function (err, data) {
    if (data !== null) {
      console.log(data);
      sendata.response = 2;
      res.json(sendata);
      res.end();
    } else {
      var newuser = new subscription({
        email: req.body.email,
        name: req.body.name
      });
      newuser.save(function (err, data) {
        console.log(data);
        sendata.response = 1;
        res.json(sendata);
        res.end();
      });
    }
  })
});

router.get('/temp', function (req, res, next) {
  var newsub = new subs({
    name: String,
    email: String
  });
  db.newsub.find(function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(data);
    }
  })
})
module.exports = router;
