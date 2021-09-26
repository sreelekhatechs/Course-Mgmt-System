import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-reg-vw',
  templateUrl: './reg-vw.component.html',
  styleUrls: ['./reg-vw.component.css']
})
export class RegVwComponent implements OnInit {

cs:any
det={
  a:"",
  b:"",
  c:""
}
  constructor(public router:Router,public srvc:CourseService) { }

  ngOnInit(): void {
    this.srvc.getstudcors()
    .subscribe(data =>{
      console.log(data)
      this.cs=data
    })
  }
approve(x:any)
{
   x.Stat="approved"
   this.det.a=x._id
     this.det.b=x.Stat
     this.det.c=x.Cname
  this.srvc.appcor(this.det)   
  .subscribe ((data) => {
    if(data.msg!=" ")
    {
alert("Sorry...Batch Full")
    }
    else if(data.msg==" ")
    {
      alert("Approved")
    }
      })
 
  }
  reject(x:any)
  {
     x.Stat="rejected"
     this.det.a=x._id
     this.det.b=x.Stat
    this.srvc.rejcor(this.det)   
    alert("Application has been Rejected")
    
  }

back()
{
this.router.navigate(['pro'])
}

}
