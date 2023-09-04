import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  constructor(private http: HttpClient) { }
  getSubject(id) {
    return this.http.get(environment.api + `api/subjects/${id}`);
  }
  getSubjects() { 
    return this.http.get(environment.api + 'api/subjects');
  }
  postSubject(newSubject) {
    return this.http.post(environment.api + 'api/subjects', newSubject);
  }
  putStubject(id, updatedSubject) {
    return this.http.put(environment.api + 'api/subjects/' + id, updatedSubject);
  }
  deleteSubject(id) {
    return this.http.delete(environment.api + 'api/subjects/' + id);
  }
}
