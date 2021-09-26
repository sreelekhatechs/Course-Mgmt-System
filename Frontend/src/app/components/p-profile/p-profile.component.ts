import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { RegService } from 'src/app/services/reg.service';

@Component({
  selector: 'app-p-profile',
  templateUrl: './p-profile.component.html',
  styleUrls: ['./p-profile.component.css']
})
export class PProfileComponent implements OnInit {
prof:any
cs:any
  constructor(public rgsrvc:RegService,public srvc:CourseService) { }

  ngOnInit(): void {
    const id=localStorage.getItem('uid')
    this.rgsrvc.getProf(id)
    .subscribe(data =>{
      this.prof=data
     // console.log(this.prof[0].Name)

      });

      this.srvc.getCor(id)
    .subscribe(data1 =>{
      console.log(data1)
      this.cs=data1
     
     
      });
  }

}
