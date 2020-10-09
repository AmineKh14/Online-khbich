const mongoose = require('mongoose') ;

var Course = mongoose.model('Course',{
    name: {type : String},
    teacher: {type: String},
    coef: {type: Number}

});

module.exports = { Course }  ;




