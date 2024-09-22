import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnathpurComponent } from './anathpur/anathpur.component';
import { SecundrabadComponent } from './secundrabad/secundrabad.component';
import { NelloreComponent } from './nellore/nellore.component';
import { KurnoolComponent } from './kurnool/kurnool.component';
import { OnlineReportsComponent } from './online-reports/online-reports.component';
import { RajamandryComponent } from './rajamandry/rajamandry.component';
import { OnlineRoutingModule } from './online-routing/online-routing.module';



@NgModule({
  declarations: [
    AnathpurComponent,
    SecundrabadComponent,
    NelloreComponent,
    KurnoolComponent,
    OnlineReportsComponent,
    RajamandryComponent
  ],
  imports: [
    CommonModule,OnlineRoutingModule
  ]
})
export class OnlinelabreportsModule { }
