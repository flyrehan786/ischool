import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { StudentsComponent } from './components/pages/students/students.component';
import { TeachersComponent } from './components/pages/teachers/teachers.component';
import { CertificatesComponent } from './components/pages/certificates/certificates.component';
import { ReportsComponent } from './components/pages/reports/reports.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';
import { UsersComponent } from './components/pages/auth/users/users.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TableComponent } from './components/core/table/table.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './components/core/form/form.component';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/core/details/details.component';
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
    UsersComponent,
    HomeComponent,
    TableComponent,
    FormComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'teachers', component: TeachersComponent },
      { path: 'certificates', component: CertificatesComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'auth/login', component: LoginComponent },
      { path: 'auth/register', component: RegisterComponent },
      { path: 'auth/users', component: UsersComponent },
      { path: 'auth/manage', component: UsersComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
