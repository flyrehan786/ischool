import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  isLoading = false;
  users: any[];
  headers: any[];
  filters: any[];
  backup: any[];
  constructor(private userService: UsersService, private commonService: CommonService) { }

  ngOnInit(): void {
    this.userService.get().subscribe((res: any) => {
      this.users = res.rows;
      this.headers = res.headers;
      this.filters = res.filters;
      this.backup = res.rows;
    })
  }
}
