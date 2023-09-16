import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpService: HttpService){}
  title = 'iot_light';

  getSerialData(){
    this.httpService.getSerial().subscribe((res)=>{
      console.log(res)
    })
    console.log("CLicked on get data.");
  }

  getMotionData(){
    this.httpService.getMotion().subscribe((res)=>{
      console.log(res)
    })
  }
}
