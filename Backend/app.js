const express=require("express");
const app=express();
const cors=require("cors");
nodemailer = require("nodemailer");
const Prof=require("./src/model/Profdata");
const Stu=require("./src/model/Studata");
const Cor=require("./src/model/Coursedata");
const Stucor=require("./src/model/Stucor");
const Test=require("./src/model/Testdata")

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 

app.post('/helo',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
          res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE,OPTIONS ");
    console.log("hello")
    console.log(req.body)
  
})
app.post('/login', (req, res) => {
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
   
    Prof.findOne({Name: req.body.name, Pswd:req.body.password},function(err,user1){
  var sta=[]
            if(!user1)
            { 
                Stu.findOne({Name: req.body.name, Pswd:req.body.password},function(err,user2){
              if(!user2)
              {
                res.status(401).send('User not registered')
              }
              else{
                  no=user2._id
                  console.log(user2)
                if(user2.PS=="")
            {
           let stat="stureg"
           sta=[no,stat]
            res.status(200).send({sta})
            console.log("success.."+sta )  
            }
            else if(user2.PS=="true")
            {
            let stat="stu"
            sta=[no,stat]
            res.status(200).send({sta})
            console.log("success.."+sta) 
            }
               }    
            })
        }
        else
        {
            no=user1._id
            console.log(user1)
            if(user1.PS=="")
            {
            let stat='profreg'
            no=user1._id
            sta=[no,stat]
            res.status(200).send({sta})
            console.log("success.."+sta)  
            }
            else if(user1.PS=="true")
            {
            let stat='prof'
            no=user1._id
            sta=[no,stat]
            res.status(200).send({sta})
            console.log("success.."+sta) 
            }
        }
         })        
        })
app.post('/reg', (req, res) => {
   
    console.log("Hi")
    console.log(req.body);    
if(req.body.newprof.type=="student")
{
    console.log("I am a Student")
    var data = {        
        Name : req.body.newprof.name,
        Email: "",
        Phone : "",
        Quali : "",
        Address: "",
        Pswd:req.body.newprof.pswd,
        PS:"",
        Type:req.body.newprof.type
}
var data = new Stu(data);
data.save();  
res.send();
}
else
{
console.log("Professor")
       var data = {
        
            Name : req.body.newprof.name,
            Email: "",
            Phone :"",
            Quali :"",
            Skill: "",
            Address: "",
            Pswd:req.body.newprof.pswd,
            PS:"",
            Type:req.body.newprof.type
  }
  var data = new Prof(data);
  data.save();  
  res.send();
}
})

app.get('/prof/:id', function(req, res){
   
    res.header("Access-Control-Allow-Origin","*");
     res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE,OPTIONS ");
     const id =req.params.id
        Prof.findOne({"_id": id})
       .then(function(posts){
                     res.send(posts);     
    });
  });

app.post('/proc',function(req,res){
 
    var id=req.body._id;
   var st="true";
    Prof.findByIdAndUpdate({"_id":id},
    {
        $set: {
            "Email": req.body.Email,
             "Phone": req.body.Phone,
            "Quali" : req.body.Quali,
            "Skill": req.body.Skill,
            "Address": req.body.Address,
            "PS":st
        }
    
    })
        .then(function(){
            res.send();
        })
   
  })
app.get('/pprof', function(req,res){
    Prof.find()
    .then(function(data){
             res.send(data);
    })
    .catch(err => {
        console.log(err);
    });
});
app.get('/stud/:id', function(req, res){
   
    res.header("Access-Control-Allow-Origin","*");
     res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE,OPTIONS ");
     const id =req.params.id
        Stu.findOne({"_id": id})
       .then(function(posts){
        
            res.send(posts);     
    });
  });
  app.post('/stuc',function(req,res){
 
    var id=req.body._id;
   var st="true";
    Stu.findByIdAndUpdate({"_id":id},
    {
        $set: {
            "Email": req.body.Email,
             "Phone": req.body.Phone,
            "Quali" : req.body.Quali,
            "Address": req.body.Address,
            "PS":st
        }
    
    })
        .then(function(){
            res.send();
        })
     })
app.get('/pstud', function(req,res){
    Stu.find()
    .then(function(data){
         res.send(data);
    })
    .catch(err => {
        console.log(err);
    });
});
app.post('/regcourse', (req, res) => {
 
    var data = {        
        Name :req.body.ncr.name,
        Dur:req.body.ncr.dur,
        Fee:req.body.ncr.fee,
        Img:req.body.ncr.img,
        Vd:req.body.ncr.vd,
        Profname:req.body.ncr.profname,
        Profid:req.body.ncr.profid,
        Size:req.body.ncr.max,
        Enroll:0
}
var data = new Cor(data);
data.save();  
res.send();
})
app.get('/profcourse/:id', function(req, res){
   
    res.header("Access-Control-Allow-Origin","*");
     res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE,OPTIONS ");
     const id =req.params.id
      Cor.find({"Profid": id})
       .then(function(posts){
           res.send(posts);     
    });
  });
  app.get('/courses', function(req,res){
    Cor.find()
    .then(function(data){
           res.send(data);
    })
    .catch(err => {
        console.log(err);
    });
});
app.get('/stucor', function(req,res){
    Stucor.find({"Stat":"pending"})
        .then(function(data){
          res.send(data);
    })
    .catch(err => {
        console.log(err);
    });
});
app.post('/studcors', (req, res) => {   
    console.log("CourseStu")
    console.log(req.body);   
        var data = {        
        Sid :req.body.new.sid,
        Sname:req.body.new.sname,
        Cid:req.body.new.cid,
        Cname:req.body.new.cname,
        Stat:"pending"
}
var data = new Stucor(data);
data.save();  
res.send();
})

app.post('/appcor', function(req,res){    
    Cor.findOne({"Name":req.body.new.c})
  .then(function(data1){
     if(data1.Size>data1.Enroll)
     {      
        Cor.findByIdAndUpdate({"_id":data1._id},
        {
            $set: {            
                "Enroll":data1.Enroll+1,                
                    }
        })
        .then(function(){})   
    Stucor.findByIdAndUpdate({"_id":req.body.new.a},
    {
        $set: {            
            "Stat":"approved"
                }
    })
    .then(function(data){         
        Stu.findOne({"_id":data.Sid})
         .then(function(datas){                    
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user:"cmstcsion@gmail.com",
      pass: "cmstcs123"
    }
  });
 
  var fieldheader ="Congratulations...!!! You hav been successfully <b> Enrolled</b> in to the  <b>"+data.Cname+"</b>  course "
  var mailOptions = {
    from: "cmstcsion@gmail.com",
    to: datas.Email,
    subject: "CMS-Notification-Approval",
    html:fieldheader ,
    attachments: []   
    };  
  transporter.sendMail(mailOptions, function(error, info){
        if (error) {     
      console.log("Sorry...Sending Failed "+err);     
    } 
  });
 })
 res.send({msg:" "})
    })
    console.log("Approved")   
     }
     else
     {
         console.log("Can't approve")
         res.send({msg:""})
     }
    })  
})

app.post('/rejcor', function(req,res){ 
  
        Stucor.findByIdAndUpdate({"_id":req.body.new.a},
    {
        $set: {            
            "Stat":"rejected"
                }
    })
    .then(function(data){
          Stu.findOne({"_id":data.Sid})
        .then(function(datas){
           var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user:"cmstcsion@gmail.com",
      pass: "cmstcs123"
    }
  });
  
  var fieldheader ="Sorry...!!! Your application for the <b>"+data.Cname+"</b>  course has been<b> Rejected</b>" 
  var mailOptions = {
    from: "cmstcsion@gmail.com",
    to: datas.Email,
    subject: "CMS-Notification-Rejection",
    html:fieldheader ,
    attachments: []   
    };  
  transporter.sendMail(mailOptions, function(error, info){
      
    if (error) {     
      console.log("Sorry...Sending Failed ");     
    } 
     });
 })
    })

})
app.get('/appcorchk/:id', function(req,res){
    const id =req.params.id  
     Stucor.findOne({"Stat":"approved","Sid":id})   
    .then(function(datas){
        Cor.find({"_id":datas.Cid})
      .then(function(data){       
      res.send(data);
         })
        })
   .catch(err => {
       console.log(err);
   });  
});
app.listen(5000,()=>{
    console.log("Server Ready at 5000");
});