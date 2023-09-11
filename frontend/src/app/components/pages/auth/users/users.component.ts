import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  eventLabel = '_users_events';
  isLoading = false;
  users: any[];
  headers: any[];
  filters: any[];
  backup: any[];
  constructor(private userService: UsersService, private _commonService: CommonService, private _router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getUsers().subscribe((res: any) => {
      this.users = res.rows;
      this.headers = res.headers;
      this.filters = res.filters;
      this.backup = res.rows;
      this.isLoading = false;
    })

    this._commonService.getEvent().subscribe(e => {
      if(e.event == this.eventLabel) {
        this._router.navigateByUrl("/auth/users/details/" + e.id);
      }
    })
  }
}
