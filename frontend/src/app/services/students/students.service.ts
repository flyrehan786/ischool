import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }
  getStudents() { 
    return this.http.get(environment.api + 'api/students');
  }
  postStudent() { }
  putStudent(id) { }
  deleteStudent(id) {}
}
