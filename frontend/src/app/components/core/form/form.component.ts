import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { TYPE_TEXT, TYPE_PASSWORD, TYPE_RADIO, TYPE_CHECKBOX } from './deps/control-types';
import { IControl } from './deps/IControl';
import { VALIDATION_MESSAGES } from './deps/validation-messages';

@Component({
  selector: 'core-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() submitted = new EventEmitter();
  @Input() title: string = 'Form Title @Input()';
  @Input() config: IControl[] = [
    {
      type: TYPE_TEXT,
      key: 'username', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'email', value: 'email', message: VALIDATION_MESSAGES.email },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '30', message: VALIDATION_MESSAGES.maxlength(30) },
          { key: 'pattern', value: 'x@gmail.com', message: VALIDATION_MESSAGES.pattern }
        ]
    },
    {
      type: TYPE_PASSWORD,
      key: 'password', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: 'Password should be required' },
          { key: 'email', value: 'email', message: 'email' }
        ]
    },
    {
      type: TYPE_RADIO,
      key: 'gender', defaultValue: '',
      options: [
        { key: 'key1', value: '1'},
        { key: 'key2', value: '2'},
        { key: 'key3', value: '3'},
      ],
      validators:
        [
          { key: 'required', value: 'required', message: 'Password should be required' },
        ]
    },
    {
      type: TYPE_CHECKBOX,
      key: 'subscriptions', defaultValue: '',
      options: [
        { key: 'check3', value: '3'}
      ],
      validators:
        [
          { key: 'required', value: 'required', message: 'Password should be required' },
        ]
    }
  ];
  form: FormGroup;
  constructor() { }
  ngOnInit() {
    let controls = {};
    for (let i = 0; i < this.config.length; i++) {
      let control = this.config[i];
      let controlValidators: ValidatorFn[] = [];
      for (let j = 0; j < control.validators.length; j++) {
        const validator = control.validators[j];
        if (validator.key === 'required') 
          controlValidators.push(Validators.required);
        else if (validator.key === 'maxLength') 
          controlValidators.push(Validators.maxLength(+validator.value));
        else if (validator.key === 'minLength') 
          controlValidators.push(Validators.minLength(+validator.value));
        else if (validator.key === 'email') 
          controlValidators.push(Validators.email);
        else if (validator.key === 'pattern') 
          controlValidators.push(Validators.pattern(validator.value));
        else { }
      }
      controls[control.key] = new FormControl('', controlValidators)
    }
    this.form = new FormGroup(controls);
  }
  submit(e) {
    console.log(e.value);
    this.submitted.emit(e.value);
  }
}