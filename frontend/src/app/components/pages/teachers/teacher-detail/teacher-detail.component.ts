import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {
  teacherId;
  teacher;
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  constructor(private _teacherService: TeachersService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.teacherId = +this._route.snapshot.paramMap.get('id');
    this.getTeacher();
  }

  getTeacher() {
    this._teacherService.getTeacher(this.teacherId).subscribe(student => {
      this.teacher = student;
    },
    (error) => {
      console.error('An error occurred:', error);
      this.toastComponent.show('(Updating Teacher API Failed).', false, true, false);
    })
  }
  deleteTeacher() {
    if(confirm('Are you sure you want to delete this teacher?')) {
      this._teacherService.deleteTeacher(this.teacherId).subscribe(res => {
        this._router.navigateByUrl('/teachers');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Updating Teacher API Failed).', false, true, false);
      });
    }
  }
  disableTeacher() {
    if(confirm('Are you sure you want to disable this teacher?')) {
      this._teacherService.disableTeacher(this.teacherId).subscribe(res => {
        this._router.navigateByUrl('/teachers');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Updating Teacher API Failed).', false, true, false);
      });
    }
  }
  activateTeacher() {
    if(confirm('Are you sure you want to activate this teacher?')) {
      this._teacherService.activateTeacher(this.teacherId).subscribe(res => {
        this._router.navigateByUrl('/teachers');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Updating Teacher API Failed).', false, true, false);
      });
    }
  }

}
