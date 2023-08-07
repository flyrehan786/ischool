import { Component, OnInit } from '@angular/core';
import { TYPE_TEXT, TYPE_PASSWORD, TYPE_RADIO, TYPE_CHECKBOX } from 'src/app/components/core/form/deps/control-types';
import { IControl } from 'src/app/components/core/form/deps/IControl';
import { VALIDATION_MESSAGES } from 'src/app/components/core/form/deps/validation-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  config: IControl[] = [
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
        bsCols: 'col-md-3'
    },
    {
      type: TYPE_PASSWORD,
      key: 'password', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: 'Password should be required' },
        ],
        visible: true,
        bsCols: 'col-md-12'
    },
  ];
  constructor() { }
  ngOnInit(): void {
  }
  onSubmit(e) {
  }
}
