import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IControl } from 'src/app/components/core/components/form/deps/IControl';
import { TYPE_text } from 'src/app/components/core/components/form/deps/control-types';
import { VALIDATION_MESSAGES } from 'src/app/components/core/components/form/deps/validation-messages';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { GradesService } from 'src/app/services/grades/grades.service';

@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.css']
})
export class GradeFormComponent implements OnInit {
  gradeId;
  editMode = false;
  grade;
  formTitle = 'New Student';
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
  constructor(private _route: ActivatedRoute, private _gradeService: GradesService, private _router: Router) { }

  ngOnInit(): void {
    this.gradeId = this._route.snapshot.paramMap.get('id');
    if (this.gradeId) {
      this.editMode = true;
      this.formTitle = 'Edit Grade';
      this.getGrade();

    }
  }
  getGrade() {
    this._gradeService.getGrade(this.gradeId).subscribe(student => {
      this.grade = student;
      this.config.forEach(c => {
        if (c.key == 'name') c.defaultValue = this.grade.name;
      })
    })
  }
  onSubmit(e) {
    if (this.editMode) {
      this._gradeService.putGrade(this.gradeId, e).subscribe(
        (res: HttpResponse<any>) => {
          this.toastComponent.show('(Grade Updated Successfully).', true, false, false);
          setTimeout(() => {
            this._router.navigateByUrl('/grades');
          }, 1500)
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastComponent.show('(Updating Grade API Failed).', false, true, false);
        })
    }
    else {
      this._gradeService.postGrade(e).subscribe(
        (res: HttpResponse<any>) => {
          this.toastComponent.show('(Grade Created Successfully).', true, false, false);
          setTimeout(() => {
            this._router.navigateByUrl('/grades');
          }, 1500);
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastComponent.show('(Adding Grade API Failed).', false, true, false);
        })
    }
  }
}
