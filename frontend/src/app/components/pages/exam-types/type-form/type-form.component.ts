import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IControl } from 'src/app/components/core/components/form/deps/IControl';
import { TYPE_text } from 'src/app/components/core/components/form/deps/control-types';
import { VALIDATION_MESSAGES } from 'src/app/components/core/components/form/deps/validation-messages';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { ExamTypeService } from 'src/app/services/exam-type/exam-type.service';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.css']
})
export class TypeFormComponent implements OnInit {
  examTypeId;
  editMode = false;
  examType;
  formTitle = 'New Exam Type';
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  config: IControl[] = [
    {
      type: TYPE_text,
      key: 'name', defaultValue: '', label: 'Name',
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
  constructor(
    private _route: ActivatedRoute, 
    private _examTypeService: ExamTypeService, 
    private _router: Router) { }

  ngOnInit(): void {
    this.examTypeId = this._route.snapshot.paramMap.get('id');
    if (this.examTypeId) {
      this.editMode = true;
      this.formTitle = 'Edit Exam Type';
      this.getExamType();
    }
  }
  getExamType() {
    this._examTypeService.getExamType(this.examTypeId).subscribe(type => {
      this.examType = type;
      this.config.forEach(c => {
        if (c.key == 'name') c.defaultValue = this.examType.name;
      })
    })
  }
  onSubmit(e) {
    if (this.editMode) {
      this._examTypeService.putExamType(this.examTypeId, e).subscribe(
        (res: HttpResponse<any>) => {
          this.toastComponent.show('(Exam-Type Updated Successfully).', true, false, false);
          setTimeout(() => {
            this._router.navigateByUrl('/exam-types');
          }, 1500)
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastComponent.show('(Updating Exam-Type API Failed).', false, true, false);
        })
    }
    else {
      this._examTypeService.postExamType(e).subscribe(
        (res: HttpResponse<any>) => {
          this.toastComponent.show('(Exam-Type Created Successfully).', true, false, false);
          setTimeout(() => {
            this._router.navigateByUrl('/exam-types');
          }, 1500);
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastComponent.show('(Adding Exam-Type API Failed).', false, true, false);
        })
    }
  }

}
