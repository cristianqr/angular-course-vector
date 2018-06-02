import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Person} from '../models/person.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-person-new',
  templateUrl: './person-new.component.html',
  styleUrls: ['./person-new.component.css']
})
export class PersonNewComponent implements OnInit {
  @Output() save = new EventEmitter<Person>();
  @ViewChild('f') form: NgForm;
  @ViewChild('txtName') nameElement: ElementRef;
  nativeName;
  constructor() {

  }

  ngOnInit() {
    this.nativeName = this.nameElement.nativeElement;
  }

  onSubmit({value, invalid}: {value: Person, invalid: boolean}) {
    // console.log('onSubmit');
    // Object.keys(this.form.controls).forEach(item => {
    //   this.form.controls[item]['touched'] = true;
    // });
    if (invalid) {
      console.log('datos invalidos');
      return;
    }
    this.save.emit(value);
  }

  reset (e) {
    e.preventDefault();
    this.form.onReset();
    this.nativeName.focus();
  }

}
