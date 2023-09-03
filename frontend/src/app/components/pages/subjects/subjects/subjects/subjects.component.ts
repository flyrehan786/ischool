import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  eventLabel = '_subject_event';
  title;
  headers;
  rows;
  filters = [ 'name' ];
  constructor() { }

  ngOnInit(): void {
  }

}
