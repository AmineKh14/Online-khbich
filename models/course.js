const mongoose = require('mongoose') ;

var Course = mongoose.model('Course',{
    name: {type : String},
    teacher: {type: String},
    coef: {type: String}

});

module.exports = { Course }  ;
