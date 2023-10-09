import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CertificatesService } from 'src/app/services/certificates/certificates.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-student-issued-certificates',
  templateUrl: './student-issued-certificates.component.html',
  styleUrls: ['./student-issued-certificates.component.css']
})
export class StudentIssuedCertificatesComponent implements OnInit {
  isLoading =  false;
  eventLabel = '_issued_certificate_events';
  headers = [
    'id',
    // 'active_enrollment_grade_id', 
    'student_registration_no',
    'student_first_name',
    'student_last_name',
    'student_gender',
    'student_age', 
    'student_cnic',
    'student_father_name', 
    'student_father_cnic', 
    'student_post_office', 
    'student_tehsil', 
    'student_district',
    'created_at',
    'updated_at',
  ];
  filters = [
    'student_first_name',
    'student_last_name',
    'student_cnic',
  ];
  rows: any = [];
  studentId;
  constructor(
    private _route: ActivatedRoute,
    private _certificateService: CertificatesService, 
    private _commonService: CommonService, 
    private _router: Router) { }
  ngOnInit(): void {
    this.studentId = this._route.snapshot.paramMap.get('id');
    this.getStudents();
    this._commonService.getEvent().subscribe(e => {
      if(e.event == this.eventLabel) {
        this._router.navigateByUrl("/student/issued/certificate/details/" + e.id);
      }
    })
  }
  getStudents() {
    this.isLoading = true;
    if(this.studentId) {
      this._certificateService.getIssuedCertificatesByStudentId(this.studentId).subscribe(res => {
        this.rows = res;
        this.isLoading = false;
      });
    } else {
      this._certificateService.getIssuedCertificates().subscribe(res => {
        this.rows = res;
        this.isLoading = false;
      });
    }
  }
}
