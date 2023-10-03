import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  constructor(private http: HttpClient) { }
  getGrade(id) {
    return this.http.get(environment.api + `api/grades/${id}`);
  }
  getGrades() { 
    return this.http.get(environment.api + 'api/grades');
  }
  postGrade(newGrade) {
    return this.http.post(environment.api + 'api/grades', newGrade);
  }
  putGrade(id, updatedGrade) {
    return this.http.put(environment.api + 'api/grades/' + id, updatedGrade);
  }
  deleteGrade(id) {
    return this.http.delete(environment.api + 'api/grades/' + id);
  }
}
