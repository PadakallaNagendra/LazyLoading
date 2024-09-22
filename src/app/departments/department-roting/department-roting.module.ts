import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DepartmentsComponent } from '../departments/departments.component';
import { AccedentComponent } from '../accedent/accedent.component';
import { BariatricsurguryComponent } from '../bariatricsurgury/bariatricsurgury.component';
import { BiochemistryComponent } from '../biochemistry/biochemistry.component';
import { CancerRehabilationCenterComponent } from '../cancer-rehabilation-center/cancer-rehabilation-center.component';
import { AnastiologistComponent } from '../anastiologist/anastiologist.component';

const routes: Routes = [
  {path:'',component: DepartmentsComponent,
    children: [ 
    {path:'Accedent',component: AccedentComponent},
    {path:'Bariatricsurgury',component: BariatricsurguryComponent},
    {path:'Biochemistry',component: BiochemistryComponent},
    {path:'CancerRehabilationCenter',component: CancerRehabilationCenterComponent},
    {path:'Anastiologist',component:AnastiologistComponent},
  ],

  },
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRotingModule { }
