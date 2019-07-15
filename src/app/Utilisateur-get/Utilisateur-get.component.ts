import { Component, OnInit } from '@angular/core';
import Utilisateur from '../Utilisateur';
import { UtilisateursService } from '../utilisateurs.service';

@Component({
  selector: 'app-utilisateur-get',
  templateUrl: './utilisateur-get.component.html',
  styleUrls: ['./utilisateur-get.component.css']
})
export class UtilisateurGetComponent implements OnInit {

  utilisateurs: Utilisateur[];
  constructor(private ps: UtilisateursService) { }

  ngOnInit() {
    this.ps
      .getUtilisateur()
      .subscribe((data: Utilisateur[]) => {
        this.utilisateurs = data;
    });
  }

  // utilisateur-get.component.ts

  deleteUtilisateur(id) {
    this.ps.deleteUtilisateur(id).subscribe(res => {
      this.utilisateurs.splice(id, 1);
    });
  }
}
