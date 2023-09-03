import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { SubjectsService } from 'src/app/services/subjects/subjects.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {
  subjectId;
  subject;
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  constructor(private _subjectService: SubjectsService, private _route: ActivatedRoute, private _router: Router) { }
  ngOnInit(): void {
    this.subjectId = +this._route.snapshot.paramMap.get('id');
    this.getSubject();
  }
  getSubject() {
    this._subjectService.getSubject(this.subjectId).subscribe(subject => {
      this.subject = subject;
    },
    (error) => {
      console.error('An error occurred:', error);
      this.toastComponent.show('(Updating Subject API Failed).', false, true, false);
    })
  }
  deleteTeacher() {
    if(confirm('Are you sure you want to delete this subject?')) {
      this._subjectService.deleteSubject(this.subjectId).subscribe(res => {
        this._router.navigateByUrl('/subjects');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Updating Subject API Failed).', false, true, false);
      });
    }
  }
}
