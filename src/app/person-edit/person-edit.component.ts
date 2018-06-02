import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Person} from '../models/person.model';
import {CustomValidatorService} from '../shared/services/CustomValidatorService';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit, OnChanges {
  personForm: FormGroup;
  @Input() person: Person;
  @Output() updatePerson = new EventEmitter<Person>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm2();
  }

  buildForm () {
    this.personForm = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl(),
      state: new FormControl(),
      profile: new FormControl()
    });
  }

  buildForm2 () {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, CustomValidatorService.ageValidator]],
      state: ['', Validators.required],
      profile: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.personForm) {
      return;
    }
    this.personForm.patchValue(this.person);
  }

  onSubmit () {
    if (this.personForm.invalid) {
      return;
    }
    console.log('exito');
    const sendData = {...this.personForm.value, id: this.person.id};
    this.updatePerson.emit(sendData);
  }
}
