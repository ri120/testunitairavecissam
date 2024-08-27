import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestioncomponentComponent } from './pages/gestioncomponent/gestioncomponent.component';
import { CompetencesdtoComponent } from './pages/competencesdto/competencesdto.component';
import { EmployeeComponent } from './pages/employee/employee.component';

const routes: Routes = [{path:"" , component:GestioncomponentComponent },
  {path:"compp", component:CompetencesdtoComponent},
  {path:"emp", component:EmployeeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
