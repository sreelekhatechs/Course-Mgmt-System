import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(public http:HttpClient) { }

  Regcor(item:any)
  {
    return this.http.post("http://localhost:5000/regcourse",{"ncr":item})
    .subscribe (data => {console.log(data)})
  }
  getCor(id:any)
      {
        
        return this.http.get("http://localhost:5000/profcourse/"+id)
      }
      getCors()
      {
        
        return this.http.get("http://localhost:5000/courses")
      }
      Regstudcr(item:any)
  {
    return this.http.post("http://localhost:5000/studcors",{"new":item})
    .subscribe (data => {console.log(data)})
  }
  getstudcors()
  {
    return this.http.get<any>("http://localhost:5000/stucor")
  }
  appcor(item:any)
  {
    return this.http.post<any>("http://localhost:5000/appcor",{"new":item})
    
  }
  rejcor(item:any)
  {
   
    return this.http.post("http://localhost:5000/rejcor",{"new":item})
    .subscribe (data => {console.log(data)})
  }
  appCor(id:any)
  {
    return this.http.get("http://localhost:5000/appcorchk/"+id)
    
  }
  makntf()
  {
    return this.http.get<any>("http://localhost:5000/blkntf")
   
  }
}
