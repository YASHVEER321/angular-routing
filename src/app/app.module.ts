import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppComponent2 } from './component2';
import { AppComponent3 } from './component3';
import {AppRoutingModule} from './routeFile'
@NgModule({
  declarations: [
    AppComponent,
    AppComponent2,
    AppComponent3
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
