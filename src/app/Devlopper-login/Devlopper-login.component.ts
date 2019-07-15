import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateursService } from '../Utilisateurs.service';


@Component({
    selector: 'app-Devlopper-login',
    templateUrl: './Devlopper-login.component.html',
    styleUrls: ['./Devlopper-login.component.css']
  })
  export class LoginComponent implements OnInit {
    angForm: FormGroup;
    constructor(private fb: FormBuilder, private ps: UtilisateursService,  private router: Router) {
      
    }
  
  
    ngOnInit() {
    }
  
   
  
  }
  