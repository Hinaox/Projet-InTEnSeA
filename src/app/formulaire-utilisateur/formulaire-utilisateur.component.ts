import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire-utilisateur',
  templateUrl: './formulaire-utilisateur.component.html',
  styleUrls: ['./formulaire-utilisateur.component.scss'],
})
export class FormulaireUtilisateurComponent implements OnInit {
  lieu = 0;
  genre = 0 ;
  id = "";
  dateNaissance = "--/--/--";
  constructor() { }

  ngOnInit() {}

}
