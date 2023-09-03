import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
  constructor(private http: HttpClient) { }
  getExam(id) {
    return this.http.get(environment.api + `api/exams/${id}`);
  }
  getExams() { 
    return this.http.get(environment.api + 'api/exams');
  }
  postExam(newExam) {
    return this.http.post(environment.api + 'api/exams', newExam);
  }
  putExam(id, updatedExam) {
    return this.http.put(environment.api + 'api/exams/' + id, updatedExam);
  }
  deleteExam(id) {
    return this.http.delete(environment.api + 'api/exams/' + id);
  }
}
