import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  borderRed = 'border-red';
  withBorderRed = true;
  gender = true;

  get boxProperty () {
    return {
      'border-green': this.gender,
      'border-red': !this.gender
    };
  }
  constructor() { }

  ngOnInit() {
  }

  processGender (gender) {
    console.log(gender);
    this.gender = gender;
  }

}
