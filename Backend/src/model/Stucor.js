const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cm', { useNewUrlParser: true,retryWrites: true,w: "majority"  });
//mongoose.Promise = global.Promise;
const Schema=mongoose.Schema;
const StucorSchema=new Schema({
Sid:String,
Sname:String,
Cid:String,
Cname:String,
Stat:String,  
});

var Stucor=mongoose.model('stucor',StucorSchema);

module.exports = Stucor;