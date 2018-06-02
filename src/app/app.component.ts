
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
  currentPerson: Person = {};

  constructor (private peopleService: PeopleService) {
    this.listPerson();
  }

  listPerson () {
    this.peopleService.listPerson().subscribe(people => {
      this.personList = people;
    });
  }

   deletePerson (person: Person) {
    this.peopleService.deletePerson(person.id).subscribe(res => {
      this.personList = this.personList.filter((item) => item.id !== person.id);
    });
  }

  savePerson (newPerson: Person) {
    this.peopleService.savePerson(newPerson).subscribe(person => {
      this.personList.push(person);
    }, (error) => {
      console.log(error);
    });
  }

  editPerson (person: Person) {
    this.currentPerson = person;
  }

  updatePerson (person) {
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
