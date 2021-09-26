import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(public http:HttpClient) { }
  
  Reg(item:any)
  {
    return this.http.post("http://localhost:5000/reg",{"newprof":item})
    .subscribe (data => {console.log(data)})
  }
  
  Pregc(item:any)
  {
    return this.http.post("http://localhost:5000/proc",item)
    .subscribe (data => {console.log(data)})
  }
  getprof()
  {
      return this.http.get("http://localhost:5000/pprof")
  }
  getProf(id:any)
      {
        
        return this.http.get("http://localhost:5000/prof/"+id)
      }
  
   getstud()
  {
    return this.http.get("http://localhost:5000/pstud")
  }
  getStud(id:any)
      {
        
        return this.http.get("http://localhost:5000/stud/"+id)
      }
  Sregc(item:any)
  {
    return this.http.post("http://localhost:5000/stuc",item)
    .subscribe (data => {console.log(data)})
  }
  loginUser(user:any){
    return this.http.post<any>("http://localhost:5000/login",user)
      }
}
