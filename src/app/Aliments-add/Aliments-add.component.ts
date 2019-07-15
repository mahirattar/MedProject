import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateursService } from '../Utilisateurs.service';


@Component({
    selector: 'app-Aliments-login',
    templateUrl: './Aliments-add.component.html',
    styleUrls: ['./Aliments-add.component.css']
  })
  export class AlimentsAddComponent implements OnInit {
    angForm: FormGroup;

    
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
    addAliments(AlimentNom, AlimentQte, AlimentDescription, AlimentCalorie) {
      this.ps.addAliments(AlimentNom, AlimentQte, AlimentDescription, AlimentCalorie);
    }
  
    ngOnInit() {
    }
  
   
  
  }
  