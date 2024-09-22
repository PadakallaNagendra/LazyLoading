import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { InternationalPatientComponent } from '../international-patient/international-patient.component';
import { LocationsComponent } from '../locations/locations.component';
import { PatientTestimonialsComponent } from '../patient-testimonials/patient-testimonials.component';
import { ServiceFacilitiesComponent } from '../service-facilities/service-facilities.component';
import { SpecialtiesComponent } from '../specialties/specialties.component';
import { TechnologyAndInnovationComponent } from '../technology-and-innovation/technology-and-innovation.component';

const routes: Routes = [
  {path:'',component: InternationalPatientComponent,
    children: [
    {path:'',redirectTo:'InternationalPatient',pathMatch:'full'},
    {path:'InternationalPatient',component: InternationalPatientComponent},
    {path:'Locations',component: LocationsComponent},
    {path:'PatientTestimonials',component: PatientTestimonialsComponent},
    {path:'ServiceFacilities',component: ServiceFacilitiesComponent},
    {path:'Specialties',component: SpecialtiesComponent},
    {path:'TechnologyAndInnovation',component:TechnologyAndInnovationComponent},
  ]

  },
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternationalRoutingModule { }
