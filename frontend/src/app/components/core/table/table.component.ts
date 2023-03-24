import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'core-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() title: string = '';
  @Input() headers: any[] = [];
  @Input() columns: any[] = [];
  BACKUP: any[] = [];
  constructor() { }
  ngOnInit(): void {
    this.BACKUP = JSON.parse(JSON.stringify(this.columns));
  }
  filter(keyword: string) {
    if(keyword.length > 0) {
      this.columns = this.BACKUP.filter(x => {
        let flag = false;
        this.headers.forEach((header) => {
          const value = x[header.key];
          console.log(value)
          if (value && value.toString().toLowerCase().includes(keyword.toLowerCase())) {
            console.log('trueeee')
            flag = true;
          }
        });
        console.log('--- true')
        console.log(flag)
        return flag;
      })
    }
    else this.columns = JSON.parse(JSON.stringify(this.BACKUP));
  }
}