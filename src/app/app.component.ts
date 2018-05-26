
import {Component} from '@angular/core';
import { Person } from './models/person.model';
import {HttpClient} from '@angular/common/http';
import {PeopleService} from './shared/services/people.service';

@Component({
  selector: 'app-base',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello';
  personList: Person[] = [];

  constructor (private peopleService: PeopleService) {
    this.peopleService.listPerson().subscribe(people => {
      this.personList = people;
    });
  }

   deletePerson (person: Person) {
    this.personList = this.personList.filter((item) => item.id !== person.id);
  }

  savePerson () {
    const newPerson = {
      'name': 'bbbbbb',
      'lastName': 'bbbb bbbb',
      'age': 18,
      'state': 'Inactivo',
      'profile': 'aaa a aa a a a a a a a a a a a a a a a a a  a'
    };
    this.peopleService.savePerson(newPerson).subscribe(person => {
      this.personList.push(person);
    }, (error) => {
      console.log(error);
    });
  }

  updatePerson () {
    const updatePerson: Person = {
      id: 1,
      name: 'Carla 1',
      lastName: 'Perez Puma',
      age: 25,
      state: 'activo',
      profile: 'Programador web en joomla'
    };

    this.peopleService.updatePerson(updatePerson).subscribe(person => {
      this.personList = this.personList.map(item => {
        return (item.id === person.id) ? person : item;
      });
    });
  }
}
