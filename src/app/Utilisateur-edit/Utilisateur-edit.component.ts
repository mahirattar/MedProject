import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateursService } from '../utilisateurs.service';

@Component({
  selector: 'app-utilisateur-edit',
  templateUrl: './utilisateur-edit.component.html',
  styleUrls: ['./utilisateur-edit.component.css']
})
export class UtilisateurEditComponent implements OnInit {

  angForm: FormGroup;
  utilisateur: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: UtilisateursService, private fb: FormBuilder) {
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

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editUtilisateur(params.id).subscribe(res => {
          this.utilisateur = res;
      });
    });
  }

  updateutilisateur(UtilisateurNom, UtilisateurPrenom, UtilisateurMail, UtilisateurAge, UtilisateurTaille, UtilisateurPoid, UtilisateurGenre, id) {
    this.route.params.subscribe(params => {
      this.ps.updateUtilisateur(UtilisateurNom, UtilisateurPrenom, UtilisateurMail, UtilisateurAge, UtilisateurTaille, UtilisateurPoid, UtilisateurGenre, params.id);
      this.router.navigate(['utilisateurs']);
    });
  }
}
