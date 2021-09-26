const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cm', { useNewUrlParser: true,retryWrites: true,w: "majority"  });
//mongoose.Promise = global.Promise;
const Schema=mongoose.Schema;
const CorsSchema=new Schema({
Name:String,
Dur:String,
Fee:String,
Img:String,
Vd:String,
Profname:String,
Profid:String,  
Size:Number,
Enroll:Number
});

var Cor=mongoose.model('cor',CorsSchema);

module.exports = Cor;