import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headers = [
    { id:1, key: 'id'},
    { id:2, key: 'name'},
    { id:3, key: 'age'},
  ];
  columns = [
    { id: 1, name: 'rehanz', age: 27 },
    { id: 2, name: 'rehany', age: 27 },
    { id: 3, name: 'rehanx', age: 27 },
  ]
  title = 'app';
}
