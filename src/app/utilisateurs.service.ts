import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../app/Devlopper';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  uri = 'http://localhost:4000/Utilisateurs';
  uri1 ='http://localhost:4000/Aliments'
  private token: string;
  constructor(private http: HttpClient) { }
  
  loggedIn = new BehaviorSubject<boolean>(false);

  addUtilisateur(UtilisateurNom, UtilisateurPrenom, UtilisateurMail, UtilisateurAge, UtilisateurTaille, UtilisateurPoid, UtilisateurGenre) {
    console.log(UtilisateurNom, UtilisateurPrenom, UtilisateurMail, UtilisateurAge, UtilisateurTaille, UtilisateurPoid, UtilisateurGenre);
    const obj = {
      UtilisateurNom,
      UtilisateurPrenom,
      UtilisateurMail,
      UtilisateurAge,
      UtilisateurTaille,
      UtilisateurPoid,
      UtilisateurGenre

    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
 
  getUtilisateur() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editUtilisateur(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateUtilisateur(UtilisateurNom, UtilisateurPrenom, UtilisateurMail, UtilisateurAge, UtilisateurTaille, UtilisateurPoid, UtilisateurGenre, id) {
    const obj = {
      UtilisateurNom,
      UtilisateurPrenom,
      UtilisateurMail,
      UtilisateurAge,
      UtilisateurTaille,
      UtilisateurPoid,
      UtilisateurGenre
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteUtilisateur(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }

  addAliments(AlimentNom, AlimentQte, AlimentDescription, AlimentCalorie) {
    console.log(AlimentNom, AlimentQte, AlimentDescription, AlimentCalorie);
    const obj = {
      AlimentNom,
      AlimentQte,
      AlimentDescription,
      AlimentCalorie
    };
    this.http.post(`${this.uri1}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}
