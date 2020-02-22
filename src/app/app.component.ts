import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appDataSource = [
    { name: 'Focus', power: 10, color: 'red' },
    { name: 'Leon', power: 12, color: 'white' },
    { name: 'Ferrari', power: 14, color: 'black' }
  ];
}
