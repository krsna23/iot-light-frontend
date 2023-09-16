import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SerialDataComponent } from './serial/serial-data/serial-data.component';
import { AppComponent } from './app.component';
import { MotionDataComponent } from './serial/motion-data/motion-data.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'arduino', component: SerialDataComponent},
  {path: 'motion', component: MotionDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
