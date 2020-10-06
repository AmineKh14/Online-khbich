const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Course} = require('../models/course') ;


router.get('/', (req, res) => {
    Course.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Courses :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/', (req, res) => {
    var Course = new Course({
        name: req.body.fullname,
        teacher: req.body.module,
        coef: req.body.course,
    });
    Course.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Course Save :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.get('/:name', (req, res) => {

    Course.find
});

module.exports = router ;