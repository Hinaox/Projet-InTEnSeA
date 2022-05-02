import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {HomePage} from "./home/home.page";
import {MenuMemoireComponent} from "./menu-components/menu-memoire.component";
import {MenuAttentionComponent} from "./menu-components/menu-attention.component";
import {MenuSensorielComponent} from "./menu-components/menu-sensoriel.component";
import { DiapoExempleComponent } from './diapo-exemple/diapo-exemple.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'memoire',
    component: MenuMemoireComponent
  },
  {
    path: 'attention',
    component: MenuAttentionComponent
  },
  {
    path: 'sensoriel',
    component: MenuSensorielComponent
  },
  {
    path: 'questionnaire',
    component: MenuComponent
  },
  {
    path: 'diapo-exemple',
    component: DiapoExempleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
