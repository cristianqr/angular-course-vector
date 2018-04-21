
import {Component} from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello';

  arrayDatos = [
    {
      name: 'Jorge',
      firtName: 'perales'
    }
  ];
}
