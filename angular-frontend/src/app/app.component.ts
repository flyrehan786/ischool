import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoading = true;
  constructor(private authService: AuthService, private route: Router) { }
  ngOnInit() {
    this.isLoading = false;
    const isLoggedIn = this.authService.isloggedIn();
    if(!isLoggedIn) this.route.navigateByUrl('/auth/login');
  }
}
