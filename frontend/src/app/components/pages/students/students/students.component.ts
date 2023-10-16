import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  isLoading =  false;
  eventLabel = '_students_events';
  headers = [
    'id',
    // 'active_enrollment_grade_id', 
    'registration_no',
    'first_name',
    'last_name',
    'gender',
    'age', 
    'cnic',
    'active_enrollment_grade_name', 
    'active_enrollment_grade_status', 
    'father_name', 
    'father_cnic', 
    'post_office', 
    'tehsil', 
    'district',
    'status', 
    'created_at',
  ];
  filters = [
    'first_name',
    'last_name',
    'cnic',
    'district',
    'status'
  ];
  rows: any = [];
  constructor(private _studentService: StudentsService, private _commonService: CommonService, private _router: Router) { }
  ngOnInit(): void {
    this.getStudents();
    this._commonService.getEvent().subscribe(e => {
      if(e.event == this.eventLabel) {
        this._router.navigateByUrl("/student/details/" + e.id);
      }
    })
  }
  getStudents() {
    this.isLoading = true;
    this._studentService.getStudents().subscribe(res => {
      this.rows = res;
      this.isLoading = false;
    });
  }
}
