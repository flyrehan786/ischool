import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IControl } from 'src/app/components/core/components/form/deps/IControl';
import { TYPE_dropdown, TYPE_text } from 'src/app/components/core/components/form/deps/control-types';
import { VALIDATION_MESSAGES } from 'src/app/components/core/components/form/deps/validation-messages';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { GradesService } from 'src/app/services/grades/grades.service';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-student-enroll',
  templateUrl: './student-enroll.component.html',
  styleUrls: ['./student-enroll.component.css']
})
export class StudentEnrollComponent implements OnInit {
  studentId;
  editMode = false;
  student;
  grades;
  formTitle = 'Student Enroll Form';
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
      bsCols: 'col-md-2',
    },
    {
      type: TYPE_dropdown,
      key: 'grade_id', defaultValue: '', label: 'Grade',
      options: [],
      validators: [],
      visible: true,
      bsCols: 'col-md-2'
    },
  ];
  constructor(
    private _route: ActivatedRoute, 
    private _studentService: StudentsService,
    private _gradesService: GradesService,
    private _router: Router) { }

  ngOnInit(): void {
    this.getGrades();
    this.studentId = this._route.snapshot.paramMap.get('id');
    if (this.studentId) {
      this.editMode = true;
      this.formTitle = 'Edit Enroll Form';
    }
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
    // if (this.editMode) {
    //   this._studentService.putTimeTable(this.studentId, e).subscribe(
    //     (res: HttpResponse<any>) => {
    //       this.toastComponent.show('(Time Table Updated Successfully).', true, false, false);
    //       setTimeout(() => {
    //         this._router.navigateByUrl('/time-tables');
    //       }, 1500)
    //     },
    //     (error) => {
    //       console.error('An error occurred:', error);
    //       this.toastComponent.show('(Updating Time Table API Failed).', false, true, false);
    //     })
    // }
    // else {
    //   this._studentService.postTimeTable(e).subscribe(
    //     (res: HttpResponse<any>) => {
    //       this.toastComponent.show('(Time Table Created Successfully).', true, false, false);
    //       setTimeout(() => {
    //         this._router.navigateByUrl('/time-tables');
    //       }, 1500);
    //     },
    //     (error) => {
    //       console.error('An error occurred:', error);
    //       this.toastComponent.show('(Adding Time Table API Failed).', false, true, false);
    //     })
    // }
  }
}
