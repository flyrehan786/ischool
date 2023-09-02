import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  constructor(private _teacherService: TeachersService) { }

  ngOnInit(): void {
  }

  updateTeacher() {
    // this._teacherService.putTeacher(1);
  }

  deleteTeacher() {
    // this._teacherService.deleteTeacher(1);
  }

}
