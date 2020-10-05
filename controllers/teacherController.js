const express = require('express');
var router = express.Router();

var {Teacher} = require('../models/teacher') ;


router.get('/', (req, res) => {
    Teacher.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Teachers :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/', (req, res) => {
    var teacher = new Teacher({
        fullname: req.body.fullname,
        module: req.body.module,
        course: req.body.course,
    });
    teacher.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Teacher Save :' + JSON.stringify(err, undefined, 2)); }
    });
});