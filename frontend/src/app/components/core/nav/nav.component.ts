import { Component, OnInit } from '@angular/core';

interface IDropdown {
  key: string;
  value: string
}
interface ILink {
  title: string;
  icon: string;
  routerLink: string;
  isAnchor: boolean;
  isDropDown: boolean;
  dropDownOptions: IDropdown[]
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  appName: string;
  appLogo: string;

  leftSideLinks: ILink[];
  rightSideLinks: ILink[];
  constructor() { }

  ngOnInit(): void {
  }

}
