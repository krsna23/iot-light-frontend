import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SerialDataComponent } from './serial-data/serial-data.component';
import { MotionDataComponent } from './motion-data/motion-data.component';



@NgModule({
  declarations: [
    SerialDataComponent,
    MotionDataComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SerialModule { }
