import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormulaireUtilisateurComponent } from './formulaire-utilisateur/formulaire-utilisateur.component';

import  { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { PageChargementComponent } from './page-chargement/page-chargement.component';
import { SousMenuAttentionComponent } from './sous-menu-attention/sous-menu-attention.component';
import { SousMenuMemoireComponent } from './sous-menu-memoire/sous-menu-memoire.component';
import { SousMenuSensorielComponent } from './sous-menu-sensoriel/sous-menu-sensoriel.component';


// const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },

// ];

const appRoutes: Routes = [
  {path: 'main-menu', component: MenuPrincipalComponent},
  {path: 'sous-menu-memoire', component: SousMenuMemoireComponent},
  {path: 'sous-menu-attention', component: SousMenuAttentionComponent},
  {path: 'sous-menu-sensoriel', component: SousMenuSensorielComponent},
  {path: 'page-chargement', component: PageChargementComponent},
  { path: 'formulaire-utilisateur', component: FormulaireUtilisateurComponent},
  {
    path: '',
    redirectTo: 'main-menu',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
