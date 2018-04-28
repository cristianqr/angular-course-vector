import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-model',
  templateUrl: './test-model.component.html',
  styleUrls: ['./test-model.component.css']
})
export class TestModelComponent implements OnInit {
  name = 'Mi nombre';
  constructor() { }

  ngOnInit() {
  }

  getInputValue() {
    console.log(this.name);
  }
}
