import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Person} from '../../models/person.model';
import {CustomValidatorService} from '../../shared/services/CustomValidatorService';
import {ActivatedRoute, Router} from '@angular/router';
import {PeopleService} from '../../shared/services/people.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  personForm: FormGroup;
  person: Person;
  personId;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleService
  ) {
    this.personId = +this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.buildForm2();
    this.loadPersson();
  }

  loadPersson () {
    this.peopleService.getPersonById(this.personId).subscribe(person => {
      this.personForm.patchValue(person);
    });
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

  onSubmit () {
    if (this.personForm.invalid) {
      return;
    }
    const sendData = {...this.personForm.value, id: this.personId};
    this.peopleService.updatePerson(sendData).subscribe(() => {
      this.router.navigate(['/people']);
    });
  }
}
