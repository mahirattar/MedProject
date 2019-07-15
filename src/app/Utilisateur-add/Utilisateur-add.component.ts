import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilisateursService } from '../Utilisateurs.service';

@Component({
  selector: 'app-utilisateur-add',
  templateUrl: './utilisateur-add.component.html',
  styleUrls: ['./utilisateur-add.component.css']
})
export class UtilisateurAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: UtilisateursService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      UtilisateurNom: ['', Validators.required ],
      UtilisateurPrenom: ['', Validators.required ],
      UtilisateurMail: ['', Validators.required ],
      UtilisateurAge: ['', Validators.required ],
      UtilisateurTaille: ['', Validators.required ],
      UtilisateurPoid: ['', Validators.required ],
      UtilisateurGenre: ['', Validators.required ]
    });
  }

  addUtilisateur(UtilisateurNom, UtilisateurPrenom, UtilisateurMail, UtilisateurAge, UtilisateurTaille, UtilisateurPoid, UtilisateurGenre) {
    this.ps.addUtilisateur(UtilisateurNom,UtilisateurPrenom, UtilisateurMail, UtilisateurAge, UtilisateurTaille, UtilisateurPoid, UtilisateurGenre);
  }

  ngOnInit() {
  }

}
