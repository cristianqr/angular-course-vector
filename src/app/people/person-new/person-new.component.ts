import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Person} from '../../models/person.model';
import {NgForm} from '@angular/forms';
import {PeopleService} from '../../shared/services/people.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-person-new',
  templateUrl: './person-new.component.html',
  styleUrls: ['./person-new.component.css']
})
export class PersonNewComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  @ViewChild('txtName') nameElement: ElementRef;
  nativeName;
  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.nativeName = this.nameElement.nativeElement;
  }

  onSubmit({value, invalid}: {value: Person, invalid: boolean}) {
    if (invalid) {
      return;
    }
    this.peopleService.savePerson(value).subscribe(() => {
      this.router.navigate(['people']);
    });
  }

  reset (e) {
    e.preventDefault();
    this.form.onReset();
    this.nativeName.focus();
  }

}
