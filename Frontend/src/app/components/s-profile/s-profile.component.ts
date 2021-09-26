import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { RegService } from 'src/app/services/reg.service';

@Component({
  selector: 'app-s-profile',
  templateUrl: './s-profile.component.html',
  styleUrls: ['./s-profile.component.css']
})
export class SProfileComponent implements OnInit {
stud:any
stud1:any
cs:any
  constructor(public rgsrvc:RegService,public srv:CourseService) { }

  ngOnInit(): void {
    const id=localStorage.getItem('uid')
    this.rgsrvc.getStud(id)
    .subscribe(data =>{
      this.stud=data
          });
    this.srv.appCor(id)
    .subscribe(data =>{
      console.log(data)
      this.cs=data   
     
      });
      

  }

}
