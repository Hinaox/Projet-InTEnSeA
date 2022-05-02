import { Component } from '@angular/core';
import {IMenuComponent} from './menu-components/menu.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  title = 'The title';
  hasBackButton = false;

  constructor() {}

  logTitle(component: IMenuComponent) {
    this.title = component.title;
    this.hasBackButton = component.hasBackButton;
  }
}
