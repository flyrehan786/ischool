import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { ExamTypeService } from 'src/app/services/exam-type/exam-type.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  eventLabel = '_exam_type_event';
  title = 'Exam Types';
  headers = [ 'id', 'name', 'created_at', 'updated_at'];
  rows;
  filters = [ 'name' ];
  constructor(private _examTypeService: ExamTypeService, private _commonService: CommonService, private _router: Router) { }
  ngOnInit(): void {
    this.getExamTypes();
    this._commonService.getEvent().subscribe(e => {
      if(e.event == this.eventLabel) {
        this._router.navigateByUrl("/exam-type/details/" + e.id);
      }
    })
  }
  getExamTypes() {
    this._examTypeService.getExamTypes().subscribe(res => {
      this.rows = res;
    });
  }
}
