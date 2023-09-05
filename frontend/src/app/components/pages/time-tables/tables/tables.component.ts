import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { TimeTableService } from 'src/app/services/time-table/time-table.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  eventLabel = '_timetable_event';
  title;
  headers = [ 
    'day_name', 
    'time_7AM_8AM', 
    'time_8AM_9AM', 
    'time_9PM_10PM', 
    'time_10AM_11AM', 
    'time_11AM_12PM', 
    'time_12PM_1PM', 
    'time_1PM_2PM' 
  ];
  rows;
  filters = [ 'name' ];
  constructor(
    private _timeTableService: TimeTableService, 
    private _commonService: CommonService, 
    private _router: Router) { }
  ngOnInit(): void {
    this.getTimeTables();
    this._commonService.getEvent().subscribe(e => {
      if(e.event == this.eventLabel) {
        this._router.navigateByUrl("/time-table/details/" + e.id);
      }
    })
  }
  getTimeTables() {
    this._timeTableService.getTimeTables().subscribe(res => {
      this.rows = res;
    });
  }
}
