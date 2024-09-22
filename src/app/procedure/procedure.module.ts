import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnteriorResectionComponent } from './anterior-resection/anterior-resection.component';
import { AorticAnuerysmComponent } from './aortic-anuerysm/aortic-anuerysm.component';
import { AorticStentGraftComponent } from './aortic-stent-graft/aortic-stent-graft.component';
import { ArthroscopyComponent } from './arthroscopy/arthroscopy.component';
import { BrainCancerComponent } from './brain-cancer/brain-cancer.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { ProcedureRoutingModule } from './procedure-routing/procedure-routing.module';



@NgModule({
  declarations: [
    AnteriorResectionComponent,
    AorticAnuerysmComponent,
    AorticStentGraftComponent,
    ArthroscopyComponent,
    BrainCancerComponent,
    ProcedureComponent
  ],
  imports: [
    CommonModule,ProcedureRoutingModule
  ]
})
export class ProcedureModule { }
