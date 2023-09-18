import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-student-enrollments-against-student',
  templateUrl: './student-enrollments-against-student.component.html',
  styleUrls: ['./student-enrollments-against-student.component.css']
})
export class StudentEnrollmentsAgainstStudentComponent implements OnInit {
  studentId;
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
    'first_name',
    'last_name',
    'cnic',
    'district',
    'status'
  ];
  rows: any = [];
  constructor(private _studentService: StudentsService, private _commonService: CommonService, private _router: Router, private _route: ActivatedRoute) { }
  ngOnInit(): void {
    this.studentId = this._route.snapshot.paramMap.get('id');
    this.getStudentEnrollments();
    this._commonService.getEvent().subscribe(e => {
      if(e.event == this.eventLabel) {
        this._router.navigateByUrl("/student/enrollment/details/" + e.id);
      }
    })
  }
  getStudentEnrollments() {
    this.isLoading = true;
    this._studentService.getStudentEnrollmentsAgaintStudent(this.studentId).subscribe(res => {
      this.rows = res;
      this.isLoading = false;
    });
  }
}
