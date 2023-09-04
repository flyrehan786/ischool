import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { GradesService } from 'src/app/services/grades/grades.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  eventLabel = '_grade_event';
  title;
  headers = [ 'id', 'name', 'created_at', 'updated_at'];
  rows;
  filters = [ 'name' ];
  constructor(private _gradeService: GradesService, private _commonService: CommonService, private _router: Router) { }
  ngOnInit(): void {
    this.getGrades();
    this._commonService.getEvent().subscribe(e => {
      if(e.event == this.eventLabel) {
        this._router.navigateByUrl("/grade/details/" + e.id);
      }
    })
  }
  getGrades() {
    this._gradeService.getGrades().subscribe(res => {
      this.rows = res;
    });
  }
}
