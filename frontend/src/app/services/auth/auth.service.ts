import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endPoint = environment.api;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { 
      this.getLoggedInUser();
  }

  login(credentials) {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    return this.http.post(this.endPoint + 'api/auth', credentials);
    
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  isloggedIn() {
    const token = localStorage.getItem('token');
    if(token) return true;
    else false;
  }

  getLoggedInUser() {
    const token = localStorage.getItem('token'); 
    
    if (token) {
      const decodedToken = jwt_decode(token);
      return decodedToken;
    } else {
      return {};
    }
  }
  
  register(user) {
    return this.http.post(this.endPoint + 'api/users/register', user)
  }
}
