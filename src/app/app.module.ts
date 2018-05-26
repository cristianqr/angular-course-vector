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
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { BasicDirective } from './shared/directives/basic.directive';
import { AttachFileDirective } from './shared/directives/attach-file.directive';
import {FullnamePipe} from './shared/pipes/fullname.pipe';
import {HttpClientModule} from '@angular/common/http';
import {PeopleService} from './shared/services/people.service';
import { PersonNewComponent } from './person-new/person-new.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppFooterComponent,
    DynamicComponentInputComponent,
    PersonListComponent,
    GroupBoxComponent,
    TestViewChildComponent,
    TestModelComponent,
    NgClassComponent,
    NgStyleComponent,
    BasicDirective,
    AttachFileDirective,
    FullnamePipe,
    PersonNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FullnamePipe, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
