import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-motion-data',
  templateUrl: './motion-data.component.html',
  styleUrls: ['./motion-data.component.css']
})

export class MotionDataComponent {
  motionData:any='';
  timestamp: any;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      const data = params['data'];
      if (data !== undefined) {
        console.log("Params: ", data);
        this.motionData = JSON.parse(data);
        console.log(this.motionData);
      } else {
        console.log("Data parameter not found.");
      }
    });
  }
}
