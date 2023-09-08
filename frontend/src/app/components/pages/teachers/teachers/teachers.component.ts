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
  isLoading = false;
  eventLabel="_teachers_events";
  headers = [
    'id',
    'first_name',
    'last_name',
    'gender',
    'qualification',
    'designation',
    'joining_date', 
    'post_office', 
    'tehsil', 
    'district', 
    'status', 
    'created_at', 
    'updated_at', 
  ];
  filters = [
    'first_name',
    'last_name',
    'designation',
    'qualification',
    'status'
  ]
  rows: any = [];
  constructor(private _teacherService: TeachersService, private _commonService: CommonService, private _router: Router) { }
  ngOnInit(): void {
    this.getTeachers();
    this._commonService.getEvent().subscribe(e => {
      if(e.event == this.eventLabel) {
        this._router.navigateByUrl("/teacher/details/" + e.id);
      }
    })
  }
  getTeachers() {
    this.isLoading = true;
    this._teacherService.getTeachers().subscribe(res => {
      this.rows = res;
      this.isLoading = false;
    });
  }
}
