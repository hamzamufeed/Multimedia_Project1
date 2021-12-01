import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
