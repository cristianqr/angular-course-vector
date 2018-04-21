import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dynamic-component-input',
  templateUrl: './dynamic-component-input.component.html',
  styleUrls: ['./dynamic-component-input.component.css']
})
export class DynamicComponentInputComponent implements OnInit {
  @Input() personList;
  constructor() { }

  ngOnInit() {
  }

}
