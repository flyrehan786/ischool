import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { ExamsService } from 'src/app/services/exams/exams.service';

@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.css']
})
export class ExamDetailsComponent implements OnInit {
  examId;
  exam;
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  constructor(private _examService: ExamsService, private _route: ActivatedRoute, private _router: Router) { }
  ngOnInit(): void {
    this.exam = +this._route.snapshot.paramMap.get('id');
    this.getSubject();
  }
  getSubject() {
    this._examService.getExam(this.examId).subscribe(exam => {
      this.exam = exam;
    },
    (error) => {
      console.error('An error occurred:', error);
      this.toastComponent.show('(Updating Exam API Failed).', false, true, false);
    })
  }
  deleteExam() {
    if(confirm('Are you sure you want to delete this exam?')) {
      this._examService.deleteExam(this.exam).subscribe(res => {
        this._router.navigateByUrl('/exams');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Updating Exam API Failed).', false, true, false);
      });
    }
  }
}
