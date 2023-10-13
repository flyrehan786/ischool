import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IControl } from 'src/app/components/core/components/form/deps/IControl';
import { TYPE_text } from 'src/app/components/core/components/form/deps/control-types';
import { VALIDATION_MESSAGES } from 'src/app/components/core/components/form/deps/validation-messages';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-student-required-fee-info-form',
  templateUrl: './student-required-fee-info-form.component.html',
  styleUrls: ['./student-required-fee-info-form.component.css']
})
export class StudentRequiredFeeInfoFormComponent implements OnInit {
  studentId;
  editMode = false;
  student;
  formTitle = 'Student Required Fee';
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  config: IControl[] = [
    {
      type: TYPE_text,
      key: 'required_fee_amount', defaultValue: '', label: 'Required Fee',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '3', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
  ];
  constructor(private _studentService: StudentsService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.studentId = this._route.snapshot.paramMap.get('id');
  }

  onSubmit(e) {
    e.student_id = this.studentId;
    this._studentService.postSubmitRequiredFee(e).subscribe(
        (res: HttpResponse<any>) => {
          this.toastComponent.show('(Required Fee Created Successfully).', true, false, false);
          setTimeout(() => {
            this._router.navigateByUrl('/students');
          }, 1500);
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastComponent.show('(Adding Required Fee API Failed).', false, true, false);
        })
  }
}
