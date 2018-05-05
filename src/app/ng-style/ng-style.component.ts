import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  formatText = {
    'color': 'red',
    'border': '5px solid #090'
  };

  square = {
    height: 200,
    width: '350px',
    top: '100px',
    left: '150px'
  };

  constructor() { }

  ngOnInit() {
  }
}
