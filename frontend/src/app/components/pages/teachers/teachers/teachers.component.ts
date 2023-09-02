import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  eventLabel="_teachers_events";
  headers = [
    'id',
    'FirstName',
    'LastName',
    'Gender',
    'CNIC',
    'Age', 
    'FatherName', 
    'FatherCNIC', 
    'PostOffice', 
    'Tehsil', 
    'Distric', 
    'Status', 
    'Createdt',
    'UpdatedAt',
  ];
  filters = [
    'FirstName',
    'LastName',
    'Gender',
    'CNIC',
    'Age', 
    'FatherName', 
  ]
  rows: any = [];
  constructor(private _teacherService: TeachersService, private _commonService: CommonService, private _router: Router) { }
  ngOnInit(): void {
    // this.getTeachers();
    this._commonService.getEvent().subscribe(e => {
      if(e.event == this.eventLabel) {
        this._router.navigateByUrl("/student/details/" + e.id);
      }
    })
  }
  getTeachers() {
    this._teacherService.getTeachers().subscribe(res => {
      this.rows = res;
    });
  }
}
