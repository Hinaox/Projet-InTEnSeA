import { Component, OnInit } from '@angular/core';
import { TuileComponent } from '../tuile/tuile.component';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit {

  filenames : string[] = [];

  constructor() { }

  ngOnInit() {
      var data = JSON.parse('{"images":["001-mail inbox app.png","001-rubber duck.png","005-wheat.png","012-egg.png","013-orange juice.png","017-boomerang.png","022-beach ball.png","025-fruits.png","025-settings.png","032-guitar.png","035-tyrannosaurus.png","039-lettuce.png","043-cookies.png","043-kite.png","048-cupcake.png","048-fan.png","cerise.png","flocons-de-neige.png","iglou.png","laddu.png","lampe-de-bureau.png","lampe.png"]}');
      this.filenames = data.images;
  }

}
