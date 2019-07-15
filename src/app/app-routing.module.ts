import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilisateurAddComponent } from './Utilisateur-add/Utilisateur-add.component';
import { UtilisateurEditComponent } from './Utilisateur-edit/Utilisateur-edit.component';
import { UtilisateurGetComponent } from './Utilisateur-get/Utilisateur-get.component';
import { LoginComponent } from './Devlopper-login/Devlopper-login.component';
import { AlimentsAddComponent } from './Aliments-add/Aliments-add.component';
import { AlimentsEditComponent } from './Aliments-edit/Aliments-edit.component';


const routes: Routes = [
  {
    path: 'utilisateur/create',
    component: UtilisateurAddComponent
  },
  {
    path: 'edit/:id',
    component: UtilisateurEditComponent
  },
  {
    path: 'utilisateurs',
    component: UtilisateurGetComponent
  },
  {
    path: 'Devlopper/login',
    component: LoginComponent
  },
  {
    path: 'Aliments/add',
    component: AlimentsAddComponent
  },
  {
    path: 'Aliments/edit',
    component: AlimentsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
