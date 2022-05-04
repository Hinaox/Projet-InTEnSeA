import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuile',
  templateUrl: './tuile.component.html',
  styleUrls: ['./tuile.component.scss'],
})
export class TuileComponent implements OnInit {

  @Input() path : string = '';

  constructor() { }

  ngOnInit() {}

}
