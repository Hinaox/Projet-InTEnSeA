import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diapo-exemple',
  templateUrl: './diapo-exemple.component.html',
  styleUrls: ['./diapo-exemple.component.scss'],
})
export class DiapoExempleComponent implements OnInit {

  // état des boutons
  label_suivant : string = "Suivant";
  label_precedent : string = "Précédent";
  disable_bt_precedent : boolean = true;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  ngOnInit() {}

  updateTexteBouton(slide : any) {
    var component = this;
    slide.isEnd().then(function(isEnd) {
      if(isEnd) {
        component.label_suivant = "Terminer";
      } else {
        component.label_suivant = "Suivant";
      }
    });
    slide.isBeginning().then(function(isBeginning) {
      if(isBeginning) {
        component.disable_bt_precedent = true;
      } else {
        component.disable_bt_precedent = false;
      }
    });
  }

}
