import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IControl } from 'src/app/components/core/components/form/deps/IControl';
import { TYPE_text, TYPE_password, TYPE_radio } from 'src/app/components/core/components/form/deps/control-types';
import { VALIDATION_MESSAGES } from 'src/app/components/core/components/form/deps/validation-messages';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  config: IControl[] = [
    {
      type: TYPE_text,
      key: 'firstname', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '2', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-3'
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
      bsCols: 'col-md-3'
    },
    {
      type: TYPE_text,
      key: 'email', defaultValue: '',
      validators:
        [
          { key: 'email', value: 'email', message: VALIDATION_MESSAGES.email },
          { key: 'minLength', value: '3', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '255', message: VALIDATION_MESSAGES.maxlength(255) },
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
        ],
      visible: true,
      bsCols: 'col-md-3'
    },
    {
      type: TYPE_text,
      key: 'username', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '4', message: VALIDATION_MESSAGES.minlength(10) },
          { key: 'maxLength', value: '255', message: VALIDATION_MESSAGES.maxlength(255) },
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
          { key: 'minLength', value: '4', message: VALIDATION_MESSAGES.minlength(12) },
          { key: 'maxLength', value: '1024', message: VALIDATION_MESSAGES.maxlength(1024) },
        ],
      visible: true,
      bsCols: 'col-md-3'
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
  constructor(private authService: AuthService, private _router: Router) { }
  ngOnInit(): void {
  }

  onSubmit(e) {
    const firstName = e.firstname;
    const lastName = e.lastname;
    const email = e.email;
    const username = e.username;
    const password = e.password;
    const isAdmin = e.admin;

    const payload = {
      first_name: firstName,
      last_name: lastName,
      email,
      username,
      password,
      is_admin: isAdmin
    };

    this.authService.register(payload).subscribe(
      (res: HttpResponse<any>) => {
        this.toastComponent.show('User Registered Successfully.', true, false, false);
        setTimeout(() => {
          this._router.navigateByUrl('/auth/manage');
        }, 1000);
      },
      (error) => {
        // Handle error here if needed
        console.error('An error occurred:', error);
        if (error.status === 400) {
          this.toastComponent.show('User Already Exists.', false, true, false);
        }
      }
    );
  }
}
