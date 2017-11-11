var express = require('express');
var router = express.Router();
var admin = require('../parter/admin');
var q = require('q');
var musers = require('../models/users');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');
router.get('/', function (req, res, next) {
    res.render('admin/login');
});

router.post('/login', function (req, res, next) {

    q.all(admin.login(req.body)).then(function (data) {
        var userschema = mongoose.Schema({
            name: String,
            email: String,
            password: String,
            phone: String
        });

        var user = mongoose.model("users", userschema);
        user.findOne({ 'name': "Sandeep" }, function (err, data) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log(data);
                res.send(data);
            }
        })
    });
})

router.get('/dashboard', function (req, res, next) {
    res.render('admin/dashboard');
});

router.get('/temp', function (req, res, next) {
    // var usermodeling = new musers;
    // console.log(usermodeling)
    musers.findOne({ 'name': "Sandeep" }, function (err, data) {
        if (err) {
            res.send(err)
        } else {
            res.send(data);
        }
    })
});

router.get('/insert', function (req, res, next) {
    var newuser = new musers({
        name: "newsand",
        email: "sjakjaks@jasd.com",
        password: "ajsndjans",
        phone: '84949959'
    })
    console.log(newuser);
    newuser.save(function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(data);
            res.send(data);
        }
    })
});

router.get('/adduser',function(req,res,next){
    res.render('admin/adduser');
})
module.exports = router;