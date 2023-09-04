import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { GradesService } from 'src/app/services/grades/grades.service';

@Component({
  selector: 'app-grade-details',
  templateUrl: './grade-details.component.html',
  styleUrls: ['./grade-details.component.css']
})
export class GradeDetailsComponent implements OnInit {
  gradeId;
  grade;
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  constructor(private _gradeService: GradesService, private _route: ActivatedRoute, private _router: Router) { }
  ngOnInit(): void {
    this.grade = +this._route.snapshot.paramMap.get('id');
    this.getSubject();
  }
  getSubject() {
    this._gradeService.getGrade(this.gradeId).subscribe(grade => {
      this.grade = grade;
    },
    (error) => {
      console.error('An error occurred:', error);
      this.toastComponent.show('(Updating Grade API Failed).', false, true, false);
    })
  }
  deleteGrade() {
    if(confirm('Are you sure you want to delete this grade?')) {
      this._gradeService.deleteGrade(this.grade).subscribe(res => {
        this._router.navigateByUrl('/grades');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Updating Grade API Failed).', false, true, false);
      });
    }
  }
}
