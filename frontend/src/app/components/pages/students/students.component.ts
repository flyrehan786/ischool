import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
