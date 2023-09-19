import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-student-enrollments',
  templateUrl: './student-enrollments.component.html',
  styleUrls: ['./student-enrollments.component.css']
})
export class StudentEnrollmentsComponent implements OnInit {
  isLoading =  false;
  eventLabel = '_students_enrollments_events';
  headers = [
    'id',
    'student_id',
    'grade_id',
    'student_name',
    'student_father_name',
    'student_cnic',
    'grade_name',
    'status', 
    'created_at',
    'updated_at',
  ];
  filters = [
    'student_name',
    'student_cnic',
    'student_father_name',
    'grade_name',
  ];
  rows: any = [];
  constructor(private _studentService: StudentsService, private _commonService: CommonService, private _router: Router) { }
  ngOnInit(): void {
    this.getEnrollments();
    this._commonService.getEvent().subscribe(e => {
      if(e.event == this.eventLabel) {
        this._router.navigateByUrl("/student/enrollment/details/" + e.id);
      }
    })
  }
  getEnrollments() {
    this.isLoading = true;
    this._studentService.getStudentEnrollments().subscribe(res => {
      this.rows = res;
      this.isLoading = false;
    });
  }
}
