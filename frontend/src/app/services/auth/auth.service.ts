import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endPoint = environment.api;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) { 
  }

  login(credentials) {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    return this.http.post(this.endPoint + 'api/auth', credentials)
    
  }
  logOut() {}
  isloggedIn() {
    const token = localStorage.getItem('token');
    if(token) return true;
    else false;
  }
  getLoggedInUser() {
  }
  register(user) {
    return this.http.post(this.endPoint + 'api/users/register', user)
  }
}
