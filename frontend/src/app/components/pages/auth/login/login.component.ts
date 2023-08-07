import { Component, OnInit } from '@angular/core';
import { TYPE_text, TYPE_password, TYPE_radio, TYPE_checkbox } from 'src/app/components/core/form/deps/control-types';
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
      type: TYPE_text,
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
      type: TYPE_password,
      key: 'password', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
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
