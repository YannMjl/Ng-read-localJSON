import { Component } from '@angular/core';
import demodata from '../assets/demo.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'read-json-demo';

  Players: any = demodata;
}
