import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurAddComponent } from './Utilisateur-add/Utilisateur-add.component';
import { UtilisateurGetComponent } from './Utilisateur-get/Utilisateur-get.component';
import { UtilisateurEditComponent } from './Utilisateur-edit/Utilisateur-edit.component';
import { LoginComponent } from './Devlopper-login/Devlopper-login.component';
import { AlimentsAddComponent } from './Aliments-add/Aliments-add.component';
import { AlimentsEditComponent } from './Aliments-edit/Aliments-edit.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { UtilisateursService } from './utilisateurs.service';
@NgModule({
  declarations: [
    AppComponent,
    UtilisateurAddComponent,
    UtilisateurGetComponent,
    UtilisateurEditComponent,
    LoginComponent,
    AlimentsAddComponent,
    AlimentsEditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UtilisateursService],
  bootstrap: [AppComponent]
})
export class AppModule { }
