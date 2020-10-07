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
    var course = new Course({
        name: req.body.name,
        teacher: req.body.teacher,
        coef: req.body.coef,
    });
    course.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Course Save :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.get('/:name', (req, res) => {

    Course.findOne({name : req.params.name},(err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('There is no such a Course :' + JSON.stringify(err, undefined, 2)); }
    });
});



router.put('/:name', (req, res) => {
    var course = {
        name: req.body.name,
        teacher: req.body.teacher,
        coef: req.body.coef
    };
    Course.updateOne({name: req.params.name}, course, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('There is no such a Course :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.delete('/:name',(req,res) => {
    Course.remove({name : req.params.name},(err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('There is no such a Course :' + JSON.stringify(err, undefined, 2)); }
    });
})

module.exports = router ;
