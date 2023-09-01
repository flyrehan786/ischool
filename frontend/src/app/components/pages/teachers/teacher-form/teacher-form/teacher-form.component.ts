import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IControl } from 'src/app/components/core/components/form/deps/IControl';
import { TYPE_text, TYPE_radio } from 'src/app/components/core/components/form/deps/control-types';
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
  formTitle = 'New Student';
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  config: IControl[] = [
    {
      type: TYPE_text,
      key: 'firstname', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-4'
    },
    {
      type: TYPE_text,
      key: 'lastname', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '2', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-4'
    },
    {
      type: TYPE_radio,
      key: 'gender', defaultValue: '',
      options: [
        { key: '  Yes', value: '0' },
        { key: '  No', value: '1' },
      ],
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
        ],
      visible: true,
      bsCols: 'col-md-4'
    },
    {
      type: TYPE_text,
      key: 'cnic', defaultValue: '',
      label: 'CNIC',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '2', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-4'
    },
    {
      type: TYPE_text,
      key: 'age', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '1', message: VALIDATION_MESSAGES.minlength(1) },
          { key: 'maxLength', value: '3', message: VALIDATION_MESSAGES.maxlength(3) },
        ],
      visible: true,
      bsCols: 'col-md-4'
    },
    {
      type: TYPE_text,
      key: 'qualification', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '2', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-4'
    },
    {
      type: TYPE_text,
      key: 'designation', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-4'
    },
    {
      type: TYPE_text,
      key: 'joining_date', defaultValue: '',
      label: 'Joining Date',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-4'
    }
  ];
  constructor(private _route: ActivatedRoute, private _teacherService: TeachersService, private  _router: Router) { }

  ngOnInit(): void {
    this.teacherId = this._route.snapshot.paramMap.get('id');
    if (this.teacherId) {
      this.editMode = true;
      this.formTitle = 'Edit Student';
      this.getStudent();

    }
  } 
  getStudent() {
    this._teacherService.getTeacher(this.teacherId).subscribe(teacher => {
      this.teacher = teacher;
      this.config.forEach(c => {
        if (c.key == 'first_name') c.defaultValue = this.teacher.first_name;
        if (c.key == 'last_name') c.defaultValue = this.teacher.last_name;
        if (c.key == 'gender') c.defaultValue = (this.teacher.gender == 'Male') ? '1' : '0';
        if (c.key == 'cnic') c.defaultValue = this.teacher.cnic;
        if (c.key == 'age') c.defaultValue = this.teacher.age;
        if (c.key == 'father_name') c.defaultValue = this.teacher.father_name;
        if (c.key == 'father_cnic') c.defaultValue = this.teacher.father_cnic;
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
          this.toastComponent.show('(Student Updated Successfully).', true, false, false);
          setTimeout(() => {
            this._router.navigateByUrl('/students');
          }, 1500)
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastComponent.show('(Updating Student API Failed.', false, true, false);
        })
    }
    else {
      this._teacherService.postTeacher(e).subscribe(
        (res: HttpResponse<any>) => {
          this.toastComponent.show('(Student Created Successfully).', true, false, false);
          setTimeout(() => {
            this._router.navigateByUrl('/students');
          }, 1500);
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastComponent.show('Adding Student API Failed.', false, true, false);
        })
    }
  }

}
