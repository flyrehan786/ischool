import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  endPoint = environment.api;
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(this.endPoint + 'api/users');
  }
  getUser(id) {
    return this.http.get(this.endPoint + 'api/users/' + id);
  }
  deleteUser(id) {
    return this.http.delete(this.endPoint + 'api/users/' + id);
  }
}
