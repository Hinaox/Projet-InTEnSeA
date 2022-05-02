import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import {HomePage} from './home/home.page';
import { AppRoutingModule } from './app-routing.module';
import {RouteReuseStrategy} from '@angular/router';
import {MenuItemComponent} from "./menu-item/menu-item.component";

@NgModule({
  declarations: [AppComponent, HomePage, MenuItemComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
