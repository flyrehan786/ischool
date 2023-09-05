import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  constructor(private http: HttpClient) { }
  getTimeTable(id) {
    return this.http.get(environment.api + `api/time-tables/${id}`);
  }
  getTimeTables() { 
    return this.http.get(environment.api + 'api/time-tables');
  }
  postTimeTable(newTimeTable) {
    return this.http.post(environment.api + 'api/time-tables', newTimeTable);
  }
  putTimeTable(id, updatedTimeTable) {
    return this.http.put(environment.api + 'api/time-tables/' + id, updatedTimeTable);
  }
  deleteTable(id) {
    return this.http.delete(environment.api + 'api/time-tables/' + id);
  }
}
