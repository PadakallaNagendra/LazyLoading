import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsModule } from './departments/departments.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InstituteModule } from './institute/institute.module';

const routes: Routes = [
  {path:'', component: HomeComponent},
{path:'Departments',loadChildren:()=>import('./departments/departments.module').then
                                         ((m)=>m.DepartmentsModule
                                        ),
                                      },
{path:'Institue',loadChildren:()=>import('./institute/institute.module').then
                                        ((m)=>m.InstituteModule
                                       ),
                                 },                                
 {path:'InternationalPatient',loadChildren:()=>import('./international-patients/international-patients.module').then
                                      ((m)=>m.InternationalPatientsModule
                                     ),
                                   },
{path:'OnlineLabReports',loadChildren:()=>import('./onlinelabreports/onlinelabreports.module').then
                                    ((m)=>m.OnlinelabreportsModule
                                   ),
                                 },
{path:'Procedures',loadChildren:()=>import('./procedure/procedure.module').then
                                  ((m)=>m.ProcedureModule
                                 ),
                               },
//wild cards start ending of all routes
{path:'**',component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
