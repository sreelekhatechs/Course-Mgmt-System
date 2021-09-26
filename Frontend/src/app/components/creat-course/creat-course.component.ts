import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { RegService } from 'src/app/services/reg.service';

@Component({
  selector: 'app-creat-course',
  templateUrl: './creat-course.component.html',
  styleUrls: ['./creat-course.component.css']
})
export class CreatCourseComponent implements OnInit {
  prof:any
nc=
{
name:"",
dur:"",
fee:"",
img:"",
vd:"",
profname:"",
profid:"",
max:0
}

  constructor(public srvc:CourseService,public srvg:RegService,public router:Router) { }

  ngOnInit(): void {
    const id=localStorage.getItem('uid')
    this.srvg.getProf(id)
    .subscribe(data =>{
      this.prof=data
   
      });
  }
course()
{
  this.nc.profname=this.prof.Name
  this.nc.profid=this.prof._id
   this.srvc.Regcor(this.nc)
  alert("Succefully Registered");
  this.router.navigate(['pro'])
 }
 back()
{
this.router.navigate(['pro'])
}
}
