import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppNavComponent} from './app-nav/app-nav.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { DynamicComponentInputComponent } from './dynamic-component-input/dynamic-component-input.component';
import { PersonListComponent } from './person-list/person-list.component';
import { GroupBoxComponent } from './shared/group-box/group-box.component';
import { TestViewChildComponent } from './test-view-child/test-view-child.component';
import { TestModelComponent } from './test-model/test-model.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppFooterComponent,
    DynamicComponentInputComponent,
    PersonListComponent,
    GroupBoxComponent,
    TestViewChildComponent,
    TestModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
