import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {HomePage} from "./home/home.page";

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
    component: MenuComponent
  },
  {
    path: 'attention',
    component: MenuComponent
  },
  {
    path: 'sensoriel',
    component: MenuComponent
  },
  {
    path: 'questionnaire',
    component: MenuComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
