import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PeopleComponent} from './people.component';
import {PersonListComponent} from './person-list/person-list.component';
import {PersonNewComponent} from './person-new/person-new.component';
import {PersonEditComponent} from './person-edit/person-edit.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent
  },
  {
    path: 'new',
    component: PersonNewComponent
  },
  {
    path: 'edit/:id',
    component: PersonEditComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PeopleComponent,
    PersonListComponent,
    PersonNewComponent,
    PersonEditComponent
  ]
})
export class PeopleModule { }
