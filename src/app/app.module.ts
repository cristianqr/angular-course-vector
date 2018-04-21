import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppNavComponent} from './app-nav/app-nav.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { DynamicComponentInputComponent } from './dynamic-component-input/dynamic-component-input.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppFooterComponent,
    DynamicComponentInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
