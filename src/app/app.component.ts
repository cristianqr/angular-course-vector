
import {Component} from '@angular/core';
import { Person } from './models/person.model';

@Component({
  selector: 'app-base',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello';
  personList: Person[] = [
    {personId: 1, name: 'Carla', lastName: 'Perez Puma', age: 25, state: 'activo'},
    {personId: 2, name: 'Pedro', lastName: 'Hurtado Cark', age: 30, state: 'inactivo'},
    {personId: 3, name: 'aaaaa', lastName: 'aaa aaaa', age: 26, state: 'activo'}
  ];

  deletePerson (person: Person) {
    this.personList = this.personList.filter((item) => item.personId !== person.personId);
  }

  afterSelectPhoto (photo) {
    console.log(photo);
  }

  afterSelectHv (hv) {
    console.log(hv);
  }
}
