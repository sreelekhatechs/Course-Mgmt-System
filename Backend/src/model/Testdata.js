const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cm', { useNewUrlParser: true,retryWrites: true,w: "majority"  });
//mongoose.Promise = global.Promise;
const Schema=mongoose.Schema;
const TestSchema=new Schema({
Name:String,
Sid:[{ }],
Cid:[]
});

var Test=mongoose.model('test',TestSchema);

module.exports = Test;