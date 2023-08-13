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

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    // ..    
  }
  logOut() {}
  isloggedIn() {}
  getLoggedInUser() {
  }
  register(user) {
    return this.http.post(this.endPoint + 'api/users/register', user)
  }
}
