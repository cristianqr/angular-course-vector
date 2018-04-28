import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-test-view-child',
  templateUrl: './test-view-child.component.html',
  styleUrls: ['./test-view-child.component.css']
})
export class TestViewChildComponent implements OnInit {
  @ViewChild('firstName') firstName;
  constructor() { }

  ngOnInit() {
  }

  getFirstName() {
    this.firstName.nativeElement.value = 'BBBBBBBBB';
    console.log(this.firstName.nativeElement.value);
  }

}
