import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { ExamTypeService } from 'src/app/services/exam-type/exam-type.service';

@Component({
  selector: 'app-type-details',
  templateUrl: './type-details.component.html',
  styleUrls: ['./type-details.component.css']
})
export class TypeDetailsComponent implements OnInit {
  examTypeId;
  examType;
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  constructor(private _examTypeService: ExamTypeService, private _route: ActivatedRoute, private _router: Router) { }
  ngOnInit(): void {
    this.examTypeId = +this._route.snapshot.paramMap.get('id');
    this.getExamType();
  }
  getExamType() {
    this._examTypeService.getExamType(this.examTypeId).subscribe(et => {
      this.examType = et;
    },
    (error) => {
      console.error('An error occurred:', error);
      this.toastComponent.show('(Updating Exam-Type API Failed).', false, true, false);
    })
  }
  deleteExamType() {
    if(confirm('Are you sure you want to delete this exam-type?')) {
      this._examTypeService.deleteExamType(this.examTypeId).subscribe(res => {
        this._router.navigateByUrl('/exam-types');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Updating Exam-Type API Failed).', false, true, false);
      });
    }
  }
}
