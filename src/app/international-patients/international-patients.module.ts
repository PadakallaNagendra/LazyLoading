import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternationalPatientComponent } from './international-patient/international-patient.component';
import { LocationsComponent } from './locations/locations.component';
import { PatientTestimonialsComponent } from './patient-testimonials/patient-testimonials.component';
import { ServiceFacilitiesComponent } from './service-facilities/service-facilities.component';
import { SpecialtiesComponent } from './specialties/specialties.component';
import { TechnologyAndInnovationComponent } from './technology-and-innovation/technology-and-innovation.component';
import { InternationalRoutingModule } from './international-routing/international-routing.module';



@NgModule({
  declarations: [
    InternationalPatientComponent,
    LocationsComponent,
    PatientTestimonialsComponent,
    ServiceFacilitiesComponent,
    SpecialtiesComponent,
    TechnologyAndInnovationComponent
  ],
  imports: [
    CommonModule,InternationalRoutingModule
  ]
})
export class InternationalPatientsModule { }
