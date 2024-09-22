import { NgModule } from '@angular/core';
import {  Routes,RouterModule } from '@angular/router';
import { InstituteComponent } from '../institute/institute.component';
import { InstituteOfCardiaSciencesComponent } from '../institute-of-cardia-sciences/institute-of-cardia-sciences.component';
import { InstituteOfDentalScienceComponent } from '../institute-of-dental-science/institute-of-dental-science.component';
import { InstituteOfGastroenterologyHepatologyComponent } from '../institute-of-gastroenterology-hepatology/institute-of-gastroenterology-hepatology.component';
import { InstituteOfHeartLungTransplantationComponent } from '../institute-of-heart-lung-transplantation/institute-of-heart-lung-transplantation.component';
import { InstituteOfNeuroSciencesComponent } from '../institute-of-neuro-sciences/institute-of-neuro-sciences.component';

const routes: Routes =[
  {path: '', component:InstituteComponent,
    children:[
      {path:'InstituteOfCardiaSciences',component:InstituteOfCardiaSciencesComponent},
      {path:'InstituteOfDentalScience',component:InstituteOfDentalScienceComponent},
      {path:'InstituteOfGastroenterologyHepatology',component: InstituteOfGastroenterologyHepatologyComponent},
      {path:'InstituteOfHeartLungTransplantation',component: InstituteOfHeartLungTransplantationComponent},
      {path:'InstituteOfNeuroSciences',component:InstituteOfNeuroSciencesComponent},
  
    ]
  },
 
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 
})
export class InstituteRoutingModule { }
