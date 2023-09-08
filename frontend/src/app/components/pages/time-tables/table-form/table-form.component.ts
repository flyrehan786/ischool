import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IControl } from 'src/app/components/core/components/form/deps/IControl';
import { TYPE_dropdown, TYPE_text } from 'src/app/components/core/components/form/deps/control-types';
import { VALIDATION_MESSAGES } from 'src/app/components/core/components/form/deps/validation-messages';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { GradesService } from 'src/app/services/grades/grades.service';
import { TimeTableService } from 'src/app/services/time-table/time-table.service';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit {
  timeTableId;
  editMode = false;
  timeTable;
  grades;
  formTitle = 'New Time Table';
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  config: IControl[] = [
    {
      type: TYPE_text,
      key: 'day_name', defaultValue: '', label: 'Day Name',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
    {
      type: TYPE_dropdown,
      key: 'grade_id', defaultValue: '', label: 'Grade',
      options: [],
      validators: [],
      visible: true,
      bsCols: 'col-md-2'
    },
    {
      type: TYPE_text,
      key: 'time_7AM_8AM', defaultValue: '', label: 'Time 7:00 AM  -  8: 00 AM',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
    {
      type: TYPE_text,
      key: 'time_8AM_9AM', defaultValue: '', label: 'Time 8:00 AM  -  9: 00 AM',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
    {
      type: TYPE_text,
      key: 'time_9AM_10AM', defaultValue: '', label: 'Time 9:00 AM  -  10: 00 AM',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
    {
      type: TYPE_text,
      key: 'time_10AM_11AM', defaultValue: '', label: 'Time 10:00 AM  -  11: 00 AM',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
    {
      type: TYPE_text,
      key: 'time_11AM_12PM', defaultValue: '', label: 'Time 11:00 AM  -  12: 00 AM',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
    {
      type: TYPE_text,
      key: 'time_12PM_1PM', defaultValue: '', label: 'Time 12:00 PM  -  1: 00 PM',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
    {
      type: TYPE_text,
      key: 'time_1PM_2PM', defaultValue: '', label: 'Time 1:00 PM  -  2: 00 PM',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
  ];
  constructor(
    private _route: ActivatedRoute, 
    private _timeTableService: TimeTableService, 
    private _gradesService: GradesService,
    private _router: Router) { }

  ngOnInit(): void {
    this.getGrades();
    this.timeTableId = this._route.snapshot.paramMap.get('id');
    if (this.timeTableId) {
      this.editMode = true;
      this.formTitle = 'Edit Time Table';
      this.getTimeTables();
    }
  }
  getTimeTables() {
    this._timeTableService.getTimeTable(this.timeTableId).subscribe(timeTable => {
      this.timeTable = timeTable;
      this.config.forEach(c => {
        if (c.key == 'day_name') c.defaultValue = this.timeTable.day_name;
        if (c.key == 'grade_id') c.defaultValue = this.timeTable.grade_id;
        if (c.key == 'time_7AM_8AM') c.defaultValue = this.timeTable.time_7AM_8AM;
        if (c.key == 'time_8AM_9AM') c.defaultValue = this.timeTable.time_8AM_9AM;
        if (c.key == 'time_9AM_10AM') c.defaultValue = this.timeTable.time_9AM_10AM;
        if (c.key == 'time_10AM_11AM') c.defaultValue = this.timeTable.time_10AM_11AM;
        if (c.key == 'time_11AM_12PM') c.defaultValue = this.timeTable.time_11AM_12PM;
        if (c.key == 'time_12PM_1PM') c.defaultValue = this.timeTable.time_12PM_1PM;
        if (c.key == 'time_1PM_2PM') c.defaultValue = this.timeTable.time_1PM_2PM;
      })
    })
  }
  getGrades() {
    this._gradesService.getGrades().subscribe(grades => {
      this.grades = grades;
      this.setupGradesFormControlOptions();
    })
  }
  setupGradesFormControlOptions() {
    this.grades.forEach(g => {
      this.config.forEach(x => {
        if (x.key == 'grade_id') {
          x.options.push({ key: g.id, value: g.name })
        }
      })
    })
  }
  onSubmit(e) {
    if (this.editMode) {
      this._timeTableService.putTimeTable(this.timeTableId, e).subscribe(
        (res: HttpResponse<any>) => {
          this.toastComponent.show('(Time Table Updated Successfully).', true, false, false);
          setTimeout(() => {
            this._router.navigateByUrl('/time-tables');
          }, 1500)
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastComponent.show('(Updating Time Table API Failed).', false, true, false);
        })
    }
    else {
      this._timeTableService.postTimeTable(e).subscribe(
        (res: HttpResponse<any>) => {
          this.toastComponent.show('(Time Table Created Successfully).', true, false, false);
          setTimeout(() => {
            this._router.navigateByUrl('/time-tables');
          }, 1500);
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastComponent.show('(Adding Time Table API Failed).', false, true, false);
        })
    }
  }
}
