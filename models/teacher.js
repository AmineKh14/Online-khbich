const mongoose = require('mongoose') ;

var Teacher = mongoose.model('Teacher',{
    fullname: {type : String},
    module: {type: String},
    course: {type: String}

});

module.exports = teacher ;
