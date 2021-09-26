import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegService } from 'src/app/services/reg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    name:'',
    password:''
  }
  
  constructor(public router:Router,public srvc:RegService) { }

  ngOnInit(): void {
  }
  loginuser()
  {
    this.srvc.loginUser(this.user)
    .subscribe(
      res => {
        
        localStorage.setItem('uid', res.sta[0])
        console.log(res.sta[0])
        if(res.sta[1]=="prof"){  
          this.router.navigate(['pro'])
       }
        else if(res.sta[1]=="profreg")
        {
       this.router.navigate(['preg'])
      }
       else if(res.sta[1]=="stureg")
        {
       this.router.navigate(['sreg'])
      }
      else if(res.sta[1]=="stu")
      {
        this.router.navigate(['stu'])
      }
       
        }  ,     
      
      err => {
        alert("Invalid Login Credentials")
        console.log(err);
        
      }
    ) 
    
      }
}
