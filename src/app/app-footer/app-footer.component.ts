import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {
  year = new Date().getFullYear();
  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('onInit');
  }

}
