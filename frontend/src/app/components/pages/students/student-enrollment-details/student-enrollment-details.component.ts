import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-student-enrollment-details',
  templateUrl: './student-enrollment-details.component.html',
  styleUrls: ['./student-enrollment-details.component.css']
})
export class StudentEnrollmentDetailsComponent implements OnInit {
  enrollmentId;
  enrollment;
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  constructor(private _studentService: StudentsService, private _route: ActivatedRoute, private _router: Router) { }
  ngOnInit(): void {
    this.enrollmentId = +this._route.snapshot.paramMap.get('id');
    this.getEnrollment();
  }
  getEnrollment() {
    this._studentService.getStudentEnrollment(this.enrollmentId).subscribe(enrollment => {
      this.enrollment = enrollment;
    },
    (error) => {
      console.error('An error occurred:', error);
      this.toastComponent.show('(Getting Enrollement API Failed).', false, true, false);
    })
  }
  deleteEnrollment() {
    if(confirm('Are you sure you want to delete this student-enrollment?')) {
      this._studentService.deleteStudentEnrollment(this.enrollmentId).subscribe(res => {
        this._router.navigateByUrl('/student/enrollments');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Deleting Enrollment API Failed).', false, true, false);
      });
    }
  }

  disableStudent() {
    if(confirm('Are you sure you want to disable this student-enrollment?')) {
      this._studentService.disableStudent(this.enrollmentId).subscribe(res => {
        this._router.navigateByUrl('/students');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Updating Student Enrollment API Failed.', false, true, false);
      });
    }
  }
  activateStudent() {
    if(confirm('Are you sure you want to activate this student?')) {
      this._studentService.activateStudent(this.enrollmentId).subscribe(res => {
        this._router.navigateByUrl('/students');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Updating Student Enrollment API Failed.', false, true, false);
      });
    }
  }

}
