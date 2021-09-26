import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegService } from 'src/app/services/reg.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  bio={
    name:"",
    type:"",
    pswd:""
      }
  constructor(public srvc:RegService,public router:Router) { }

  ngOnInit(): void {
  }
  reg()
  {
     this.srvc.Reg(this.bio)
    alert("Succefully Registered");
    this.router.navigate(['login'])
  }
}
