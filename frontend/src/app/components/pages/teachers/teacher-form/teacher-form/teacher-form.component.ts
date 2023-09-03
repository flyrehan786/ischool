import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IControl } from 'src/app/components/core/components/form/deps/IControl';
import { TYPE_text, TYPE_radio, TYPE_date } from 'src/app/components/core/components/form/deps/control-types';
import { VALIDATION_MESSAGES } from 'src/app/components/core/components/form/deps/validation-messages';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {
  teacherId;
  editMode = false;
  teacher;
  formTitle = 'New Teacher';
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  config: IControl[] = [
    {
      type: TYPE_text,
      key: 'first_name', defaultValue: '', label: 'First Name',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
    {
      type: TYPE_text,
      key: 'last_name', defaultValue: '', label: 'Last Name',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '2', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
    {
      type: TYPE_radio,
      key: 'gender', defaultValue: '', label: 'Gender',
      options: [
        { key: '  Male', value: '1' },
        { key: '  Female', value: '0' },
      ],
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
    {
      type: TYPE_text,
      key: 'qualification', defaultValue: '',
      label: 'Qualification',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '2', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
    {
      type: TYPE_text,
      key: 'designation', defaultValue: '', label: 'Designation',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '2', message: VALIDATION_MESSAGES.minlength(1) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(3) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
    {
      type: TYPE_date,
      key: 'joining_date', defaultValue: '',
      label: 'Joining Date',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
    {
      type: TYPE_text,
      key: 'post_office', defaultValue: '', label: 'Post Office',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '2', message: VALIDATION_MESSAGES.minlength(1) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(3) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
    {
      type: TYPE_text,
      key: 'tehsil', defaultValue: '', label: 'Tehsil',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '2', message: VALIDATION_MESSAGES.minlength(1) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(3) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
    {
      type: TYPE_text,
      key: 'district', defaultValue: '', label: 'District',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '2', message: VALIDATION_MESSAGES.minlength(1) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(3) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
  ];
  constructor(private _route: ActivatedRoute, private _teacherService: TeachersService, private  _router: Router) { }

  ngOnInit(): void {
    this.teacherId = this._route.snapshot.paramMap.get('id');
    if (this.teacherId) {
      this.editMode = true;
      this.formTitle = 'Edit Teacher';
      this.getTeacher();

    }
  } 
  getTeacher() {
    this._teacherService.getTeacher(this.teacherId).subscribe(teacher => {
      this.teacher = teacher;
      this.config.forEach(c => {
        if (c.key == 'first_name') c.defaultValue = this.teacher.first_name;
        if (c.key == 'last_name') c.defaultValue = this.teacher.last_name;
        if (c.key == 'gender') c.defaultValue = (this.teacher.gender == 'Male') ? '1' : '0';
        if (c.key == 'qualification') c.defaultValue = this.teacher.qualification;
        if (c.key == 'designation') c.defaultValue = this.teacher.designation;
        if (c.key == 'joining_date') c.defaultValue = this.teacher.joining_date;
        if (c.key == 'post_office') c.defaultValue = this.teacher.post_office;
        if (c.key == 'tehsil') c.defaultValue = this.teacher.tehsil;
        if (c.key == 'district') c.defaultValue = this.teacher.district;
      })
    })
  }
  onSubmit(e) {
    if (this.editMode) {
      this._teacherService.putTeacher(this.teacherId, e).subscribe(
        (res: HttpResponse<any>) => {
          this.toastComponent.show('(Teacher Updated Successfully).', true, false, false);
          setTimeout(() => {
            this._router.navigateByUrl('/teachers');
          }, 1500)
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastComponent.show('(Updating Teacher API Failed).', false, true, false);
        })
    }
    else {
      this._teacherService.postTeacher(e).subscribe(
        (res: HttpResponse<any>) => {
          this.toastComponent.show('(Teacher Created Successfully).', true, false, false);
          setTimeout(() => {
            this._router.navigateByUrl('/teachers');
          }, 1500);
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastComponent.show('(Adding Teacher API Failed).', false, true, false);
        })
    }
  }

}
