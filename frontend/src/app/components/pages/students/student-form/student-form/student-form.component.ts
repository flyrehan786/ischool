import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IControl } from 'src/app/components/core/components/form/deps/IControl';
import { TYPE_text, TYPE_password, TYPE_radio } from 'src/app/components/core/components/form/deps/control-types';
import { VALIDATION_MESSAGES } from 'src/app/components/core/components/form/deps/validation-messages';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentId;
  editMode = false;
  student;
  formTitle = 'New Student';
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
      bsCols: 'col-md-6'
    },
    {
      type: TYPE_text,
      key: 'last_name', defaultValue: '', label: "Last Name",
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '2', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-6'
    },
    {
      type: TYPE_radio,
      key: 'gender', defaultValue: '', label: 'Gender',
      options: [
        { key: '  Yes', value: '0' },
        { key: '  No', value: '1' },
      ],
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
        ],
      visible: true,
      bsCols: 'col-md-6'
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
      bsCols: 'col-md-6'
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
      bsCols: 'col-md-6'
    },
    {
      type: TYPE_text,
      key: 'father_name', defaultValue: '', label: 'Father Name',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '2', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-6'
    },
    {
      type: TYPE_text,
      key: 'father_cnic', defaultValue: '', label: "Father CNIC",
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-6'
    },
    {
      type: TYPE_text,
      key: 'post_office', defaultValue: '', label: 'Post Office',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-6'
    },
    {
      type: TYPE_text,
      key: 'tehsil', defaultValue: '', label: 'Tehsil',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-6'
    },
    {
      type: TYPE_text,
      key: 'district', defaultValue: '', label: 'District',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-6'
    },
  ];
  constructor(private _route: ActivatedRoute, private _studentService: StudentsService) { }

  ngOnInit(): void {
    this.studentId = this._route.snapshot.paramMap.get('id');
    if(this.studentId) {
      this.formTitle = 'Edit Student';
      this.getStudent();

    }
  } 
  getStudent() {
    this._studentService.getStudent(this.studentId).subscribe(student => {
      this.student = student;
      this.config.forEach(c => {
        if(c.key == 'first_name') c.defaultValue = this.student.first_name;
        if(c.key == 'last_name') c.defaultValue = this.student.last_name;
        if(c.key == 'gender') c.defaultValue = (this.student.gender == 'Male') ? '1' : '0';
        if(c.key == 'cnic') c.defaultValue = this.student.cnic;
        if(c.key == 'age') c.defaultValue = this.student.age;
        if(c.key == 'father_name') c.defaultValue = this.student.father_name;
        if(c.key == 'father_cnic') c.defaultValue = this.student.father_cnic;
        if(c.key == 'post_office') c.defaultValue = this.student.post_office;
        if(c.key == 'tehsil') c.defaultValue = this.student.tehsil;
        if(c.key == 'district') c.defaultValue = this.student.district;
      })
    })
  }
  onSubmit(e) {
  }

}
