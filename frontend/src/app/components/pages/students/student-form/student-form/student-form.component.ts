import { Component, OnInit } from '@angular/core';
import { IControl } from 'src/app/components/core/components/form/deps/IControl';
import { TYPE_text, TYPE_password, TYPE_radio } from 'src/app/components/core/components/form/deps/control-types';
import { VALIDATION_MESSAGES } from 'src/app/components/core/components/form/deps/validation-messages';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  config: IControl[] = [
    {
      type: TYPE_text,
      key: 'firstname', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(30) },
        ],
      visible: true,
      bsCols: 'col-md-8'
    },
    {
      type: TYPE_text,
      key: 'lastname', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '2', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(30) },
        ],
      visible: true,
      bsCols: 'col-md-8'
    },
    {
      type: TYPE_text,
      key: 'email', defaultValue: '',
      validators:
        [
          { key: 'email', value: 'email', message: VALIDATION_MESSAGES.email },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(30) },
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
        ],
      visible: true,
      bsCols: 'col-md-8'
    },
    {
      type: TYPE_text,
      key: 'username', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '30', message: VALIDATION_MESSAGES.maxlength(30) },
        ],
      visible: true,
      bsCols: 'col-md-8'
    },
    {
      type: TYPE_password,
      key: 'password', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
        ],
      visible: true,
      bsCols: 'col-md-8'
    },
    {
      type: TYPE_radio,
      key: 'admin', defaultValue: '',
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
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
