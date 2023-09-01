import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }
  getStudent(id) {
    return this.http.get(environment.api + `api/students/${id}`);
  }
  getStudents() { 
    return this.http.get(environment.api + 'api/students');
  }
  postStudent(newStudent) {
    return this.http.post(environment.api + 'api/students', newStudent);
  }
  putStudent(id, updatedStudent) {
    return this.http.put(environment.api + 'api/students/' + id, updatedStudent);
  }
  deleteStudent(id) {
    return this.http.delete(environment.api + 'api/students/' + id);
  }
  disableStudent(id) {
    return this.http.put(environment.api + 'api/students/disable/' + id, {});
  }
}
