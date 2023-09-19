import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  data:any = '';

  constructor(private router: Router, private httpService: HttpService){}
  title = 'iot_light';

  getSerialData(){
    this.httpService.getSerial().subscribe((res)=>{
      console.log("RES changed",res)
      this.data=res;
      this.passDataToGetData();
    })
    
  }

  getMotionData(){
    this.httpService.getMotion().subscribe((res: any)=>{
      console.log(res)
      this.data = res;
      // console.log(this.data);
      this.passDataToMotionData();
    })
  }

  passDataToGetData(){
    console.log("Data for get sending to child.", this.data)
    const allDataToPass = JSON.stringify(this.data);
    this.router.navigate(['/serial-data',allDataToPass]);
  }

  passDataToMotionData() {
    console.log("DATA PASSING STARTED.")
    // Data to be passed
    const motionDataToPass = JSON.stringify(this.data);
    // Navigate to the MotionDataComponent route and pass data
    this.router.navigate(['/motion-data', motionDataToPass]);
  }
}
  
