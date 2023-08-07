import { Component, OnInit } from '@angular/core';
import { IControl } from 'src/app/components/core/form/deps/IControl';
import { TYPE_TEXT, TYPE_PASSWORD, TYPE_RADIO } from 'src/app/components/core/form/deps/control-types';
import { VALIDATION_MESSAGES } from 'src/app/components/core/form/deps/validation-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  config: IControl[] = [
    {
      type: TYPE_TEXT,
      key: 'firstname', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '30', message: VALIDATION_MESSAGES.maxlength(30) },
        ],
        visible: true,
        bsCols: 'col-md-6'
    },
    {
      type: TYPE_TEXT,
      key: 'lastname', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '30', message: VALIDATION_MESSAGES.maxlength(30) },
        ],
        visible: true,
        bsCols: 'col-md-6'
    },
    {
      type: TYPE_TEXT,
      key: 'Email', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'email', value: 'email', message: 'email' }
        ],
        visible: true,
        bsCols: 'col-md-6'
    },
    {
      type: TYPE_TEXT,
      key: 'username', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '30', message: VALIDATION_MESSAGES.maxlength(30) },
        ],
        visible: true,
        bsCols: 'col-md-6'
    },
    {
      type: TYPE_PASSWORD,
      key: 'password', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
        ],
        visible: true,
        bsCols: 'col-md-6'
    },
    {
      type: TYPE_RADIO,
      key: 'admin', defaultValue: '',
      options: [
        { key: 'Yes', value: '0'},
        { key: 'No', value: '1'},
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
  onSubmit(e) {
  }
}
