import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

export const TYPE_TEXT = 'text';
export const TYPE_PASSWORD = 'password';
export const TYPE_TEXTAREA = 'textarea';
export const TYPE_RADIO = 'radio';
export const TYPE_CHECKBOX = 'checkbox';
export const TYPE_DROPDOWN = 'dropdown';

export interface IValidators {
  key: string,
  value: string,
  message: string
}
export interface IDropdownOption {
  key: string,
  value: string,
}
export interface IControl {
  type: string,
  key: string,
  defaultValue: string,
  validators: IValidators[],
  options?: IDropdownOption[]
}
@Component({
  selector: 'core-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  VALIDATION_MESSAGES = {
    required: 'This field is required. Please enter a value.',
    email: 'Invalid email format. Please check your email and try again',
    minlength: (value) => {
      return `This field hould be atleast minimun ${value} characters long.`
    },
    maxlength: (value) => {
      return `This field hould be atleast maximum ${value} characters long.`
    },
    pattern: 'Sorry, the input provided is not valid. Please revise your input to match the required format.'    
  };
  @Output() submitted = new EventEmitter();
  @Input() title: string;
  @Input() config: IControl[] = [
    {
      type: TYPE_TEXT,
      key: 'username', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: this.VALIDATION_MESSAGES.required },
          { key: 'email', value: 'email', message: this.VALIDATION_MESSAGES.email },
          { key: 'minLength', value: '5', message: this.VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '10', message: this.VALIDATION_MESSAGES.maxlength(10) },
          { key: 'pattern', value: 'rehan@gmail.com', message: this.VALIDATION_MESSAGES.pattern }
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
        if (validator.key === 'required') controlValidators.push(Validators.required);
        else if (validator.key === 'maxLength') controlValidators.push(Validators.maxLength(+validator.value));
        else if (validator.key === 'minLength') controlValidators.push(Validators.minLength(+validator.value));
        else if (validator.key === 'email') controlValidators.push(Validators.email);
        else if (validator.key === 'pattern') controlValidators.push(Validators.pattern(validator.value));
        else { }
      }
      controls[control.key] = new FormControl('', controlValidators)
    }
    this.form = new FormGroup(controls);
  }
  submit(e) {
    this.submitted.emit(e.value);
  }
}