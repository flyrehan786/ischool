import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// PAGES.
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CertificatesComponent } from './components/pages/certificates/certificates.component';
import { ReportsComponent } from './components/pages/reports/reports.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';
import { UsersComponent } from './components/pages/auth/users/users.component';
import { HomeComponent } from './components/pages/home/home.component';
import { StudentsComponent } from './components/pages/students/students/students.component';
import { StudentDetailComponent } from './components/pages/students/student-detail/student-detail.component';
import { TeacherDetailComponent } from './components/pages/teachers/teacher-detail/teacher-detail.component';
import { TeachersComponent } from './components/pages/teachers/teachers/teachers.component';
// CORE.
import { DetailsComponent } from './components/core/components/details/details.component';
import { FormComponent } from './components/core/components/form/form.component';
import { TableComponent } from './components/core/components/table/table.component';
import { ToastComponent } from './components/core/components/toast/toast/toast.component';
import { StudentFormComponent } from './components/pages/students/student-form/student-form/student-form.component';
import { AuthGuard } from './guards/auth-guard';

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
    StudentDetailComponent,
    TeacherDetailComponent,
    ToastComponent,
    StudentFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'students',
        component: StudentsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'student/new',
        component: StudentFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'teachers', 
        component: TeachersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'certificates', 
        component: CertificatesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'reports', 
        component: ReportsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'settings', 
        component: SettingsComponent,
        canActivate: [AuthGuard]
      },
      { 
        path: 'auth/login', 
        component: LoginComponent },
      {
        path: 'auth/register', 
        component: RegisterComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'auth/users', 
        component: UsersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'auth/manage', 
        component: UsersComponent,
        canActivate: [AuthGuard]
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
