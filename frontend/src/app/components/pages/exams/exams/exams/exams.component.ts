import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { ExamTypeService } from 'src/app/services/exam-type/exam-type.service';
import { ExamsService } from 'src/app/services/exams/exams.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {
  eventLabel = '_exams_events';
  isLoading = false;
  headers = [
    'id',
    'type',
    'description',
    'created_at',
    'updated_at'
  ];
  filters = [
    'name'
  ];
  rows: any = [];
  constructor(
    private _examService: ExamsService, 
    private _commonService: CommonService, 
    private _router: Router) { }
  ngOnInit(): void {
    this.getExams();
    this._commonService.getEvent().subscribe(e => {
      if(e.event == this.eventLabel) {
        this._router.navigateByUrl("/exam/details/" + e.id);
      }
    })
  }
  getExams() {
    this.isLoading = true;
    this._examService.getExams().subscribe(res => {
      this.rows = res;
      this.isLoading = false;
    });
  }
}
