import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GestioncomponentComponent } from './pages/gestioncomponent/gestioncomponent.component';
import { ModalComponent } from './modal/modal.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PopupModule } from "@progress/kendo-angular-popup";
import { CompetencesdtoComponent } from './pages/competencesdto/competencesdto.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import {MultiSelectModule} from 'primeng/multiselect';


@NgModule({
  declarations: [
    AppComponent,
    GestioncomponentComponent,
    ModalComponent,
    CompetencesdtoComponent,
    EmployeeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PopupModule,
    BrowserAnimationsModule,
    FormsModule,
    MultiSelectModule
  
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
