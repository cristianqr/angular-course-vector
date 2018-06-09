import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../shared/services/people.service';
import {Person} from '../models/person.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  personList: Person[] = [];
  currentPerson: Person = {};
  constructor (
    private peopleService: PeopleService,
    private router: Router
  ) {
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

  editPerson (person: Person) {
    this.router.navigate(['/people/edit', person.id]);
  }

  ngOnInit() {
  }

}
