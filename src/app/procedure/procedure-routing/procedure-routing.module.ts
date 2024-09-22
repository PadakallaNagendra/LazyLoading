import { Component, NgModule } from '@angular/core';
import { Route,RouterModule, Routes } from '@angular/router';
import { ProcedureComponent } from '../procedure/procedure.component';
import { AnteriorResectionComponent } from '../anterior-resection/anterior-resection.component';
import { AorticAnuerysmComponent } from '../aortic-anuerysm/aortic-anuerysm.component';
import { AorticStentGraftComponent } from '../aortic-stent-graft/aortic-stent-graft.component';
import { ArthroscopyComponent } from '../arthroscopy/arthroscopy.component';
import { BrainCancerComponent } from '../brain-cancer/brain-cancer.component';

const routes:Routes=[
{path:'',component:ProcedureComponent,
  children: [
    {path:'AnteriorResection',component:AnteriorResectionComponent},
    {path:'AorticAnuerysm',component:AorticAnuerysmComponent},
    {path:'AorticStentGraft',component:AorticStentGraftComponent},
    {path:'Arthroscopy',component:ArthroscopyComponent},
    {path:'BrainCancer',component:BrainCancerComponent},
  ],
},
];


@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
  
})
export class ProcedureRoutingModule { }
