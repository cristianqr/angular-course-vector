import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppNavComponent} from './app-nav/app-nav.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { DynamicComponentInputComponent } from './dynamic-component-input/dynamic-component-input.component';
import { TestViewChildComponent } from './test-view-child/test-view-child.component';
import { TestModelComponent } from './test-model/test-model.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { BasicDirective } from './shared/directives/basic.directive';
import { AttachFileDirective } from './shared/directives/attach-file.directive';
import {HttpClientModule} from '@angular/common/http';
import {PeopleService} from './shared/services/people.service';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthGuard} from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'people',
        loadChildren: './people/people.module#PeopleModule'
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppFooterComponent,
    DynamicComponentInputComponent,
    TestViewChildComponent,
    TestModelComponent,
    NgClassComponent,
    NgStyleComponent,
    BasicDirective,
    AttachFileDirective,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    DefaultLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PeopleService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
