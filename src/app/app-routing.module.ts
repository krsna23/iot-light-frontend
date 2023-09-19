import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SerialDataComponent } from './serial/serial-data/serial-data.component';
import { AppComponent } from './app.component';
import { MotionDataComponent } from './serial/motion-data/motion-data.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'serial-data/:data', component: SerialDataComponent},
  {path: 'motion-data/:data', component: MotionDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
