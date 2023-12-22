import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-serial-data',
  templateUrl: './serial-data.component.html',
  styleUrls: ['./serial-data.component.css']
})
export class SerialDataComponent {
  serialData: any;
  

  constructor(private route: ActivatedRoute){}

  // ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     const data = params['data'];
  //     if (data !== undefined) {
  //       console.log("Params: ", data);
  //       this.serialData = JSON.parse(data);
  //       console.log(this.serialData);
  //     } else {
  //       console.log("Data parameter not found.");
  //     }
  //   });
  // }

}
