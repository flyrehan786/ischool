import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: any;
  studentId: number;
  isLoading = false;
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  constructor(private _studentService: StudentsService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.studentId = +this._route.snapshot.paramMap.get('id');
    this.getStudent();
  }

  getStudent() {
    this._studentService.getStudent(this.studentId).subscribe(student => {
      this.student = student;
    },
    (error) => {
      console.error('An error occurred:', error);
      this.toastComponent.show('(Updating Student API Failed.', false, true, false);
    })
  }
  deleteStudent() {
    if(confirm('Are you sure you want to delete this student?')) {
      this._studentService.deleteStudent(this.studentId).subscribe(res => {
        this._router.navigateByUrl('/students');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Updating Student API Failed.', false, true, false);
      });
    }
  }
  disableStudent() {
    if(confirm('Are you sure you want to disable this student?')) {
      this._studentService.disableStudent(this.studentId).subscribe(res => {
        this._router.navigateByUrl('/students');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Updating Student API Failed.', false, true, false);
      });
    }
  }
}
