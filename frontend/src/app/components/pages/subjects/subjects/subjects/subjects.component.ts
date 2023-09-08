import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { SubjectsService } from 'src/app/services/subjects/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  isLoading = false;
  eventLabel = '_subject_event';
  title = 'Subjects';
  headers = [ 'id', 'name', 'created_at', 'updated_at'];
  rows;
  filters = [ 'name' ];
  constructor(private _subjectService: SubjectsService, private _commonService: CommonService, private _router: Router) { }
  ngOnInit(): void {
    this.getSubjects();
    this._commonService.getEvent().subscribe(e => {
      if(e.event == this.eventLabel) {
        this._router.navigateByUrl("/subject/details/" + e.id);
      }
    })
  }
  getSubjects() {
    this.isLoading = true;
    this._subjectService.getSubjects().subscribe(res => {
      this.rows = res;
      this.isLoading = false;
    });
  }

}
