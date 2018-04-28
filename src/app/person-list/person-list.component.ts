import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Person} from '../models/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  @Input() personList: Person[];
  @Output() deletePerson = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
