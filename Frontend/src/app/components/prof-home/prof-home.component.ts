import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof-home',
  templateUrl: './prof-home.component.html',
  styleUrls: ['./prof-home.component.css']
})
export class ProfHomeComponent implements OnInit {
bio={
  email:"",
  phone:"",
  quali:"",
  skill:"",
  address:""
}
  constructor() { }

  ngOnInit(): void {
  }
profreg()
{
  
}
}
