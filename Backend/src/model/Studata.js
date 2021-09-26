const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cm', { useNewUrlParser: true,retryWrites: true,w: "majority"  });
//mongoose.Promise = global.Promise;
const Schema=mongoose.Schema;
const StuSchema=new Schema({
Name:String,
Email:String,
Phone:String,
Quali:String,
Address:String,
Pswd:String,
PS:String,
Type:String
   
});

var Stu=mongoose.model('stu',StuSchema);

module.exports = Stu;