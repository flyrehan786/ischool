import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  isLoading = false;
  headers = [
    'id',
    'FirstName',
    'LastName',
    'Gender',
    'CNIC',
    'Age', 
    'FatherName', 
    'FatherCNIC', 
    'PostOffice', 
    'Tehsil', 
    'District', 
    'Status', 
    'Createdt',
    'UpdatedAt',
  ];
  columns = [
    { id: 1, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 0, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 2, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 3, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 4, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 5, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 6, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 7, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 8, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 9, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 0, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 10, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 0, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 11, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 0, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 12, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 0, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 13, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 0, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 14, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 0, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 15, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 0, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 16, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 0, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 17, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 0, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 18, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 19, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 20, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 21, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 22, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 23, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 24, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 25, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 26, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 27, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 28, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 29, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 30, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 31, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 32, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 33, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 34, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 35, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 36, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 37, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 38, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 39, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 40, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 41, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 42, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 43, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 44, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 45, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 46, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 47, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 48, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 49, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
    { id: 50, FirstName: 'rehanz', LastName: 27, Gender: 'Male', CNIC: '123', Age: '20', FatherName: 'asdad', FatherCNIC: '123123', PostOffice: 'ad', Tehsil: 'a', District: 'a', Status: 1, CreatedAt: 'a', UpdatedAt: 'a' },
  ]
  constructor(private _studentService: StudentsService) { }
  ngOnInit(): void {
  }

  getStudents() {
    this._studentService.getStudents();
  }

  addStudent() {
    this._studentService.postStudent();
  }

  updateStudent() {
    this._studentService.putStudent(1);
  }

  deleteStudent() {
    this._studentService.deleteStudent(1);
  }

}
