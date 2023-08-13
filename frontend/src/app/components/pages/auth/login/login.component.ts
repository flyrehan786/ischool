import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IControl } from 'src/app/components/core/components/form/deps/IControl';
import { TYPE_text, TYPE_password } from 'src/app/components/core/components/form/deps/control-types';
import { VALIDATION_MESSAGES } from 'src/app/components/core/components/form/deps/validation-messages';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  config: IControl[] = [
    {
      type: TYPE_text,
      key: 'username', defaultValue: '',
      label: 'Username',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(30) },
        ],
        visible: true,
        bsCols: 'col-md-7'
    },
    {
      type: TYPE_password,
      key: 'password', defaultValue: '',
      label: 'Password',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(30) },
        ],
        visible: true,
        bsCols: 'col-md-7'
    },
  ];
  constructor(private authService: AuthService,private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit(e) {
    console.log(e);
    const username = e.username;
    const password = e.password;

    const payload = { username, password };
    console.log('Login Payload::');
    console.log(payload);

    this.authService.login(payload).subscribe(
      (res: HttpResponse<any>) => {
        console.log('Response:::');
        this.toastComponent.show('User Login Successfully.', true, false, false);
        localStorage.setItem('token', (res as any).token);
        this.router.navigateByUrl('/')
      },
      (error) => {
        // Handle error here if needed
        console.error('An error occurred:', error);
        if (error.status === 400) {
          this.toastComponent.show('Login Failed.', false, true, false);
        }
      }
    );
    this.toastComponent.show('Login Successfully', true, false, false)
  }
}
