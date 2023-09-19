import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }
    
  getSerial(){
    return this.http.get('http://localhost:3000/all')
  } 

  getMotion(){
    console.log("Get request sent.")
    return this.http.get('http://localhost:3000/motion')
  }

}