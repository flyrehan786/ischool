import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

enum EValidators {
  required = 'required', minLength = 'minLength', maxLength = 'maxLength', email = 'email'
}
interface IValidators {
  key: string,
  value: string,
  message: string
}
interface IControl {
  key: string,
  defaultValue: string,
  validators: IValidators[]
}
@Component({
  selector: 'core-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  config: IControl[] = [
    {
      key: 'username', defaultValue: '', 
      validators:
        [
          { key: 'required', value: 'required', message: 'Username should be required' },
          { key: 'minLength', value: '10', message: 'Username should be minimun 10 characters long' }
        ]
    },
    {
      key: 'password', defaultValue: '', 
      validators:
      [
        { key: 'required', value: 'required', message: 'Password should be required' },
        { key: 'minLength', value: '10', message: 'Password should be minimun 10 characters long' }
      ]
    },
  ];
  form: FormGroup;
  constructor() { }
  ngOnInit() {
    let controls = {};
    for (let i = 0; i < this.config.length; i++) {
      let control = this.config[i];
      let controlValidators = [];
      for (let j = 0; j < control.validators.length; j++) {
        const validator = control.validators[j];
        if(validator.key === 'required') {
          controlValidators.push(Validators.required);
          break;
        }
        if(validator.key === 'maxLength') {
          controlValidators.push(Validators.maxLength(+validator.value));
          break;
        }
        if(validator.key === 'minLength') {
          controlValidators.push(Validators.minLength(+validator.value));
          break;
        }
        if(validator.key === 'email') {
          controlValidators.push(Validators.email);
          break;
        }
        if(validator.key === 'pattern') {
          controlValidators.push(Validators.pattern(validator.value));
          break;
        }
      }

      controls[control.key] = new FormControl('', controlValidators)
    }
    this.form = new FormGroup(controls);
    console.log(this.form);
  }
  submit(e) {
    console.log(e.value);
  }
}
