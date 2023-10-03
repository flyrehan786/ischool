import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  userId;
  user;
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  constructor(private _userService: UsersService, private _route: ActivatedRoute, private _router: Router) { }
  ngOnInit(): void {
    this.userId = +this._route.snapshot.paramMap.get('id');
    this.getUser();
  }
  getUser() {
    this._userService.getUser(this.userId).subscribe(user => {
      this.user = user;
    },
    (error) => {
      console.error('An error occurred:', error);
      this.toastComponent.show('(Updating User API Failed).', false, true, false);
    })
  }
  deleteUser() {
    if(confirm('Are you sure you want to delete this user?')) {
      this._userService.deleteUser(this.userId).subscribe(res => {
        this._router.navigateByUrl('/auth/manage');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Deleting User API Failed).', false, true, false);
      });
    }
  }
  disableUser() {
    if(confirm('Are you sure you want to disable this user?')) {
      this._userService.disableUser(this.userId).subscribe(res => {
        this._router.navigateByUrl('/auth/manage');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Updating User API Failed.', false, true, false);
      });
    }
  }
  activateUser() {
    if(confirm('Are you sure you want to activate this user?')) {
      this._userService.activateUser(this.userId).subscribe(res => {
        this._router.navigateByUrl('/auth/manage');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Updating User API Failed.', false, true, false);
      });
    }
  }

}
