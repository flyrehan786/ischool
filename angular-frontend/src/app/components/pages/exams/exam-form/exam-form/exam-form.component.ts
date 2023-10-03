import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IControl } from 'src/app/components/core/components/form/deps/IControl';
import { TYPE_dropdown, TYPE_text } from 'src/app/components/core/components/form/deps/control-types';
import { VALIDATION_MESSAGES } from 'src/app/components/core/components/form/deps/validation-messages';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { ExamTypeService } from 'src/app/services/exam-type/exam-type.service';
import { ExamsService } from 'src/app/services/exams/exams.service';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit {
  examId;
  editMode = false;
  exam;
  formTitle = 'New Exam';
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  config: IControl[] = [
    {
      type: TYPE_dropdown,
      key: 'exam_type_id', defaultValue: '', label: 'Exam Type',
      options: [],
      validators: [],
      visible: true,
      bsCols: 'col-md-2'
    },
    {
      type: TYPE_text,
      key: 'description', defaultValue: '', label: 'Description',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
  ];
  examTypes;
  constructor(
    private _route: ActivatedRoute, 
    private _examService: ExamsService, 
    private _examTypeService: ExamTypeService,
    private _router: Router) { }

  ngOnInit(): void {
    this.getExamTypes();
    this.examId = this._route.snapshot.paramMap.get('id');
    if (this.examId) {
      this.editMode = true;
      this.formTitle = 'Edit Exam';
      this.getExam();
    }
  }
  getExam() {
    this._examService.getExam(this.examId).subscribe(exam => {
      this.exam = exam;
      this.config.forEach(c => {
        if (c.key == 'name') c.defaultValue = this.exam.name;
      })
    })
  }
  getExamTypes() {
    this._examTypeService.getExamTypes().subscribe(examTypes => {
      this.examTypes = examTypes;
      this.setupGradesFormControlOptions();
    })
  }
  setupGradesFormControlOptions() {
    this.examTypes.forEach(t => {
      this.config.forEach(x => {
        if (x.key == 'exam_type_id') {
          x.options.push({ key: t.id, value: t.name })
        }
      })
    })
  }
  onSubmit(e) {
    if (this.editMode) {
      this._examService.putExam(this.examId, e).subscribe(
        (res: HttpResponse<any>) => {
          this.toastComponent.show('(Exam Updated Successfully).', true, false, false);
          setTimeout(() => {
            this._router.navigateByUrl('/exams');
          }, 1500)
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastComponent.show('(Updating Exam API Failed).', false, true, false);
        })
    }
    else {
      this._examService.postExam(e).subscribe(
        (res: HttpResponse<any>) => {
          this.toastComponent.show('(Exam Created Successfully).', true, false, false);
          setTimeout(() => {
            this._router.navigateByUrl('/exams');
          }, 1500);
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastComponent.show('(Adding Exam API Failed).', false, true, false);
        })
    }
  }
}
