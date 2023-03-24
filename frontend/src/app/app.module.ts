import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { StudentsComponent } from './components/pages/students/students.component';
import { TeachersComponent } from './components/pages/teachers/teachers.component';
import { CertificatesComponent } from './components/pages/certificates/certificates.component';
import { ReportsComponent } from './components/pages/reports/reports.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';
import { UsersComponent } from './components/pages/auth/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentsComponent,
    TeachersComponent,
    CertificatesComponent,
    ReportsComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
