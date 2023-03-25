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
  itemsPerPage = 10;
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
          const value = x[header];
          if (value && value.toString().toLowerCase().includes(keyword.toLowerCase())) {
            flag = true;
          }
        });
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
  getPagedCols() {
    return this.columns.slice((this.currentPage-1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)
  }
  getStatus(id) {
    const row = this.columns.filter(x => x.id === id);
    if(row.length > 0) {
      const statusHeader = this.headers.filter(x => (x as string).toLowerCase().includes('status'));
      if(statusHeader.length > 0) {
        console.log(statusHeader[0]);
        const status  = row[0][statusHeader[0]];
        console.log(status)
        if (status) return status;
        else return 'x';
      }
      else return 'x';
    } else return 'x'
  }
}