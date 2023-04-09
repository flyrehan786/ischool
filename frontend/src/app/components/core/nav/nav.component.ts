import { Component, Input, OnInit } from '@angular/core';
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
  @Input() appName: string;
  @Input() appLogo: string;

  @Input() leftSideLinks: ILink[];
  @Input() rightSideLinks: ILink[];
  constructor() { }
  ngOnInit(): void {
  }
}
