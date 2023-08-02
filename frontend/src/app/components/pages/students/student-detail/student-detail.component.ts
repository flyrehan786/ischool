import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  isLoading = false;
  constructor(private _studentService: StudentsService) { }

  ngOnInit(): void {
  }

  updateStudent() {
    this._studentService.putStudent(1);
  }

  deleteStudent() {
    this._studentService.deleteStudent(1);
  }


}
