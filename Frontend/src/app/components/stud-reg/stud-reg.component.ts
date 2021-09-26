import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegService } from 'src/app/services/reg.service';

@Component({
  selector: 'app-stud-reg',
  templateUrl: './stud-reg.component.html',
  styleUrls: ['./stud-reg.component.css']
})
export class StudRegComponent implements OnInit {
  user:any
  constructor(public regsrvc:RegService,public router:Router) { }

  ngOnInit(): void {
    const id=localStorage.getItem('uid')    
    this.regsrvc.getStud(id)
    .subscribe(data =>{
      this.user= data;
      });
  }
studreg()
  {
     this.regsrvc.Sregc(this.user)
    alert("Succefully Registered");
    this.router.navigate(['stu'])
  }
}
