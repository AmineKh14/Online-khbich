const express = require('express');
var router = express.Router();

var {Teacher} = require('../modules/teacher') ;


router.get('/', (req, res) => {
    Teacher.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Teachers :' + JSON.stringify(err, undefined, 2)); }
    });
});

