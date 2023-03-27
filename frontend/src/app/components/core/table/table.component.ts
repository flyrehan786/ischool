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
  headers = [ heading1, heading2, heading3 ];
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
  @Input() filters: any[] = [];
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
  // ... working on it.
  onFilterOptionClick(option) {
    console.log(option);
    const el = document.getElementById(option);
    el.after(document.createElement('input'));
    el.style.display = 'none';
  }
  totalPageNumbers() {
    let pageNumbers = [];
    const num = this.columns.length / this.itemsPerPage;
    for (let i = 1; i <= num; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }
  getPagedColumns() {
    return this.columns.slice((this.currentPage-1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)
  }
  getStatusColumn(id) {
    const row = this.columns.filter(x => x.id === id);
    if(row.length > 0) {
      const statusHeader = this.headers.filter(x => (x as string).toLowerCase().includes('status'));
      if(statusHeader.length > 0) {
        const status  = row[0][statusHeader[0]];
        if (status) return status;
        else return 'x';
      }
      else return 'x';
    } else return 'x'
  }
  filterDataByDate(fromDate, toDate) {
    const from = new Date(fromDate);
    const to = new Date(toDate);

    const filteredData = this.columns.filter((item) => {
      const date = new Date(item['created_at']);
      return date >= from && date <= to;
    });
    return filteredData;
  }
  printTable() {
    const popupWin = window.open('', '_blank', 'width=800,height=600');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Table Data</title>
          <style>
            table {
              border-collapse: collapse;
              width: 100%;
            }
            th, td {
              text-align: left;
              padding: 8px;
              border-bottom: 1px solid #ddd;
            }
            th {
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
          <h1>Table Data</h1>
          <table>
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <!-- Add more table header columns as needed -->
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1, Column 1</td>
                <td>Row 1, Column 2</td>
                <td>Row 1, Column 3</td>
                <!-- Add more table data columns as needed -->
              </tr>
              <tr>
                <td>Row 2, Column 1</td>
                <td>Row 2, Column 2</td>
                <td>Row 2, Column 3</td>
                <!-- Add more table data columns as needed -->
              </tr>
              <!-- Add more table rows as needed -->
            </tbody>
          </table>
        </body>
      </html>
    `);
    popupWin.document.close();
    popupWin.print();
  }
}