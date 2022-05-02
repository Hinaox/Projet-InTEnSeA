import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire-utilisateur',
  templateUrl: './formulaire-utilisateur.component.html',
  styleUrls: ['./formulaire-utilisateur.component.scss'],
})
export class FormulaireUtilisateurComponent implements OnInit {
  lieu = "Ecole";
  genre = "Homme" ;
  id = "";
  dateNaissance = "--/--/--";
  constructor() { }

  ngOnInit() {}
  putLieu(lieu: string){
    this.lieu = lieu;
    console.log(this.lieu);
  }
  putGenre(genre: string) {
    this.genre = genre;
    console.log(this.genre);
  }
}
