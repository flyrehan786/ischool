import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  leftSideLinks = [
    { title: 'Resources', icon: '<i class="bt bt-people-fill"></i>', routerLink: '/students', isAnchor: true, isDropDown: false, isInput: false, dropDownOptions: [] },
    { title: 'Certificates', icon: '<i class="bi bi-card-checklist"></i>', routerLink: '/certificates', isAnchor: true, isDropDown: false, isInput: false, dropDownOptions: [] },
    { title: 'Reports', icon: '<i class="bi bi-graph-up"></i>', routerLink: '/reports', isAnchor: true, isDropDown: false, isInput: false, dropDownOptions: [] },
    { title: 'Notifications', icon: 'i class="bi bi-bell-fill"></i>', routerLink: '/notifications', isAnchor: false, isDropDown: false, isInput: false, dropDownOptions: [] },
  ];
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
