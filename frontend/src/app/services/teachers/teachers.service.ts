import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private http: HttpClient) { }
  getTeacher(id) {
    return this.http.get(environment.api + `api/teachers/${id}`);
  }
  getTeachers() { 
    return this.http.get(environment.api + 'api/teachers');
  }
  postTeacher(newTeacher) {
    return this.http.post(environment.api + 'api/teachers', newTeacher);
  }
  putTeacher(id, updatedTeacher) {
    return this.http.put(environment.api + 'api/teachers/' + id, updatedTeacher);
  }
  deleteTeacher(id) {
    return this.http.delete(environment.api + 'api/teachers/' + id);
  }
  disableTeacher(id) {
    return this.http.put(environment.api + 'api/teachers/disable/' + id, {});
  }
  activateTeacher(id) {
    return this.http.put(environment.api + 'api/teachers/activate/' + id, {});
  }
}
