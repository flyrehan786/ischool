import { Component, Input, OnInit, ViewChild } from '@angular/core';

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
  @Input() title: string = '';
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
    const el = document.getElementById(option);

    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('name', 'input');
    inputElement.setAttribute('id', option + '_input');
    inputElement.classList.add('form-control');
    inputElement.style.display = 'inline';
    inputElement.autofocus = true;

    const inputButton = document.createElement('input');
    inputButton.value = 'Close'
    inputButton.setAttribute('type', 'button');
    inputButton.setAttribute('name', 'x-button');
    inputButton.setAttribute('id', option + '_button');
    inputButton.classList.add('btn');
    inputButton.classList.add('btn-link');
    inputButton.style.display = 'inline';
    inputButton.addEventListener('click', (event: any) => {
        el.classList.remove('badge');
        el.classList.remove('bg-info');
        el.classList.remove('p-2');
        el.style.display = 'initial';
        el.classList.add('p-2');
    });

    inputElement.addEventListener('keydown', (event: any) => {
      const eventVal = event.target.value;
      if (event.key === 'Enter') {
        if(eventVal) {
          const el = document.getElementById(option);
          const inputElement = document.getElementById(option + '_input');
          inputElement.remove();
          inputButton.remove();
          el.style.display = 'initial';
          el.classList.add('badge');
          el.classList.add('bg-info');
          el.classList.add('p-2');
          el.innerText = eventVal;
          this.filter(eventVal);
        } else {
          inputElement.remove();
          inputButton.remove();
          el.style.display = 'initial';
          el.classList.remove('badge');
          el.classList.remove('bg-info');
          el.classList.remove('p-2');
          el.innerText = option;
          this.filter('');
        }
      }
    });

    el.style.display = 'none';
    el.after(inputElement);
    inputElement.after(inputButton);

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
    return this.columns.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)
  }
  getStatusColumn(id) {
    const row = this.columns.filter(x => x.id === id);
    if (row.length > 0) {
      const statusHeader = this.headers.filter(x => (x as string).toLowerCase().includes('status'));
      if (statusHeader.length > 0) {
        const status = row[0][statusHeader[0]];
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
          <title>${this.title}</title>
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
          <h1>${this.title} Report</h1>
          <table>
            <thead
              ${this.getHeaders()}
            </thead>
            <tbody>
             ${this.getRows()}
            </tbody>
          </table>
        </body>
      </html>
    `);
    popupWin.document.close();
    popupWin.print();

  }
  getHeaders() {
    let headers = `<tr><th>#</th>`;
    for (let i = 0; i < this.headers.length; i++) {
      const element = this.headers[i];
      headers += `<th>${element}</th>`;
    }
    headers += `<tr />`;
    return headers;
  }
  getRows() {
    let rows = ``;
    for (let i = 0; i < this.columns.length; i++) {
      rows += `<tr><td>#</td>`;
      const row = this.columns[i];
      for (let j = 0; j < this.headers.length; j++) {
        const head = this.headers[j];
        rows += `<td>${row[head]}</td>`;
      }
      rows += `<tr />`;
    }
    return rows;
  }
}