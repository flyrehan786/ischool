import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'core-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // @Input() config; 
  // @Output() onSubmit = new EventEmitter();

  @Input() formData: any;
  form: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.form = this.fb.group({});
    for (let control of this.formData.controls) {
      let validators = [];
      for (let validator of control.validators) {
        switch (validator.name) {
          case 'required':
            validators.push(Validators.required);
            break;
          case 'minLength':
            validators.push(Validators.minLength(validator.value));
            break;
          case 'maxLength':
            validators.push(Validators.maxLength(validator.value));
            break;
          // add more validators as needed
        }
      }
      this.form.addControl(control.name, this.fb.control(control.value, validators));
    }
  }
}
