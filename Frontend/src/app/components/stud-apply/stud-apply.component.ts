import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { RegService } from 'src/app/services/reg.service';

@Component({
  selector: 'app-stud-apply',
  templateUrl: './stud-apply.component.html',
  styleUrls: ['./stud-apply.component.css']
})
export class StudApplyComponent implements OnInit {
cs:any
st:any
id:any
det={
  sid:'',
  sname:"",
  cid:"",
  cname:"",
  
}
  constructor(private router:Router,public srvc:CourseService,public sr:RegService) { }
  
  ngOnInit(): void {
   
    
   this.id=localStorage.getItem('uid')
    this.srvc.getCors()
    .subscribe(data =>{
      console.log(data)
      this.cs=data
    })
      this.sr.getStud(this.id)
    .subscribe(data1 =>{
      console.log(data1)
      this.st=data1

  })
} 

show(x:any)
{
   this.det.sid=this.id
  this.det.sname=this.st.Name
  this.det.cid=x._id
  this.det.cname=x.Name
  this.srvc.Regstudcr(this.det)
  alert("Your Application has been sent")
   this.router.navigate(["stu"])
    }
  
back()
{
   this.router.navigate(["stu"])
}
}
