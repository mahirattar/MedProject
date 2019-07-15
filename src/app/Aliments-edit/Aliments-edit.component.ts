import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateursService } from '../Utilisateurs.service';


@Component({
    selector: 'app-Aliments-edit',
    templateUrl: './Aliments-edit.component.html',
    styleUrls: ['./Aliments-edit.component.css']
  })
  export class AlimentsEditComponent implements OnInit {
    angForm: FormGroup;
    utilisateur: any = {};
    constructor(private fb: FormBuilder, private ps: UtilisateursService,  private router: Router) {
      this.createForm();
    }
    createForm() {
      this.angForm = this.fb.group({
        AlimentNom: ['', Validators.required ],
        AlimentQte: ['', Validators.required ],
        AlimentDescription: ['', Validators.required ],
        AlimentCalorie: ['', Validators.required ]
      });
    }
  
    ngOnInit() {
    }
  
   
  
  }
  