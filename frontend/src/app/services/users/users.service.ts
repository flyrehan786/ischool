import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  endPoint = environment.api;
  constructor(private http: HttpClient) { }
  get() {
    return this.http.get(this.endPoint + 'api/users');
  }
  getById() {}
  post() {}
  put(id) {}
  delete(id) {}
}
