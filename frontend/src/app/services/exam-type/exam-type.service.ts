import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamTypeService {
  constructor(private http: HttpClient) { }
  getExamType(id) {
    return this.http.get(environment.api + `api/exam-types/${id}`);
  }
  getExamTypes() { 
    return this.http.get(environment.api + 'api/exam-types');
  }
  postExamType(newExamType) {
    return this.http.post(environment.api + 'api/exam-types', newExamType);
  }
  putExamType(id, updatedExamType) {
    return this.http.put(environment.api + 'api/exam-types/' + id, updatedExamType);
  }
  deleteExamType(id) {
    return this.http.delete(environment.api + 'api/exam-types/' + id);
  }
}
