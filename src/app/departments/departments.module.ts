import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from './departments/departments.component';
import { AccedentComponent } from './accedent/accedent.component';
import { BariatricsurguryComponent } from './bariatricsurgury/bariatricsurgury.component';
import { AnastiologistComponent } from './anastiologist/anastiologist.component';
import { BiochemistryComponent } from './biochemistry/biochemistry.component';
import { CancerRehabilationCenterComponent } from './cancer-rehabilation-center/cancer-rehabilation-center.component';
import { DepartmentRotingModule } from './department-roting/department-roting.module';




@NgModule({
  declarations: [
    DepartmentsComponent,
    AccedentComponent,
    BariatricsurguryComponent,
    AnastiologistComponent,
    BiochemistryComponent,
    CancerRehabilationCenterComponent
  ],
  imports: [
    CommonModule,
    DepartmentRotingModule
  ]
})
export class DepartmentsModule { }
