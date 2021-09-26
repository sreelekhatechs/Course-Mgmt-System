import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegService } from 'src/app/services/reg.service';

@Component({
  selector: 'app-prof-reg',
  templateUrl: './prof-reg.component.html',
  styleUrls: ['./prof-reg.component.css']
})
export class ProfRegComponent implements OnInit {
  user:any
  
  constructor(public regsrvc:RegService,public router:Router) { }

  ngOnInit(): void {
    const id=localStorage.getItem('uid')    
    this.regsrvc.getProf(id)
    .subscribe(data =>{
        this.user= data;
      
    });
  }
  profreg()
  {
     this.regsrvc.Pregc(this.user)
    alert("Succefully Registered");
    this.router.navigate(['pro'])
  }
}
