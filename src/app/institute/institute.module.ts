import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstituteOfCardiaSciencesComponent } from './institute-of-cardia-sciences/institute-of-cardia-sciences.component';
import { InstituteOfDentalScienceComponent } from './institute-of-dental-science/institute-of-dental-science.component';
import { InstituteOfGastroenterologyHepatologyComponent } from './institute-of-gastroenterology-hepatology/institute-of-gastroenterology-hepatology.component';
import { InstituteOfHeartLungTransplantationComponent } from './institute-of-heart-lung-transplantation/institute-of-heart-lung-transplantation.component';
import { InstituteOfNeuroSciencesComponent } from './institute-of-neuro-sciences/institute-of-neuro-sciences.component';
import { InstituteComponent } from './institute/institute.component';
import { InstituteRoutingModule } from './institute-routing/institute-routing.module';



@NgModule({
  declarations: [
    InstituteOfCardiaSciencesComponent,
    InstituteOfDentalScienceComponent,
    InstituteOfGastroenterologyHepatologyComponent,
    InstituteOfHeartLungTransplantationComponent,
    InstituteOfNeuroSciencesComponent,
    InstituteComponent
  ],
  imports: [
    CommonModule,InstituteRoutingModule
  ]
})
export class InstituteModule {}


