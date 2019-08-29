import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  insertdata(data){
    return this.http.post("http://localhost:3200/insert",data);
  
  }


  getData(){
    return this.http.get("http://localhost:3456/getdata");
  }

  viewdata(data){
    return this.http.post("http://localhost:3456/view",data);
  }

  searchdata(data){
    return this.http.post("http://localhost:3456/search",data);
  }

}
