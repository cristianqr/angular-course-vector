import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from '../models/person.model';

@Component({
  selector: 'app-person-new',
  templateUrl: './person-new.component.html',
  styleUrls: ['./person-new.component.css']
})
export class PersonNewComponent implements OnInit {
  @Output() save = new EventEmitter<Person>();
  constructor() { }

  ngOnInit() {
  }

  onSubmit({value}: {value: Person}) {
    this.save.emit(value);
  }

}
