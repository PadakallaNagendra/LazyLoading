import { NgModule } from '@angular/core';
import { Routes,RouterModule, Route } from '@angular/router';
import { OnlineReportsComponent } from '../online-reports/online-reports.component';
import { AnathpurComponent } from '../anathpur/anathpur.component';
import { KurnoolComponent } from '../kurnool/kurnool.component';
import { NelloreComponent } from '../nellore/nellore.component';
import { RajamandryComponent } from '../rajamandry/rajamandry.component';
import { SecundrabadComponent } from '../secundrabad/secundrabad.component';

const routes: Routes=[
  {path:'',component: OnlineReportsComponent,
    children:[
  {path:'Anathpur',component:AnathpurComponent},
  {path:'Kurnool',component:KurnoolComponent},
  {path:'Nellore',component:NelloreComponent},
  {path:'Rajamandry',component:RajamandryComponent},
  {path:'Secundrabad',component:SecundrabadComponent}
    ],
  },
];




@NgModule({
  declarations: [],
 imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class OnlineRoutingModule { }
