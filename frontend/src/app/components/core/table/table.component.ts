import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'core-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  /* 
  ------------------------------
  Header/Columns Formatting Data
  ------------------------------
  headers = [
      { id:1, key: 'id'},
      { id:2, key: 'name'},
      { id:3, key: 'age'},
    ];
    columns = [
      { id: 1, name: 'rehanz', age: 27 },
      { id: 2, name: 'rehany', age: 27 },
      { id: 3, name: 'rehanx', age: 27 },
    ]
  */
  currentPage = 1;
  itemsPerPage = 5;
  @Input() headers: any[] = [];
  @Input() columns: any[] = [];
  BACKUP: any[] = [];
  constructor() { }
  ngOnInit(): void {
    this.BACKUP = JSON.parse(JSON.stringify(this.columns));
  }
  filter(keyword: string) {
    if (keyword.length > 0) {
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
  totalPageNumbers() {
    let pageNumbers = [];
    const num = this.columns.length / this.itemsPerPage;
    for (let i = 1; i <= num; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }
  checkStatusColumnsInHeader() {
    return this.headers.includes(x => (x.key as string).toLowerCase().includes('status'))
  }
  
}