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
import { HomeComponent } from './components/pages/home/home.component';

import { SettingsComponent } from './components/pages/settings/settings.component';

import { LoginComponent } from './components/pages/auth/login/login.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';
import { UsersComponent } from './components/pages/auth/users/users.component';

import { StudentsComponent } from './components/pages/students/students/students.component';
import { StudentFormComponent } from './components/pages/students/student-form/student-form/student-form.component';
import { StudentDetailComponent } from './components/pages/students/student-detail/student-detail.component';

import { TeachersComponent } from './components/pages/teachers/teachers/teachers.component';
import { TeacherFormComponent } from './components/pages/teachers/teacher-form/teacher-form/teacher-form.component';
import { TeacherDetailComponent } from './components/pages/teachers/teacher-detail/teacher-detail.component';

import { CertificateFormComponent } from './components/pages/certificates/certificate-form/certificate-form/certificate-form.component';
import { CertificatesComponent } from './components/pages/certificates/certificates/certificates.component';
import { CertificateDetailsComponent } from './components/pages/certificates/certificate-details/certificate-details/certificate-details.component';

import { SubjectsComponent } from './components/pages/subjects/subjects/subjects/subjects.component';
import { SubjectFormComponent } from './components/pages/subjects/subject-form/subject-form/subject-form.component';
import { SubjectDetailsComponent } from './components/pages/subjects/subject-details/subject-details/subject-details.component';

import { ReportsComponent } from './components/pages/reports/reports/reports.component';
import { ReportDetailsComponent } from './components/pages/reports/reports-details/report-details/report-details.component';

import { AuthGuard } from './guards/auth-guard';

// CORE.
import { DetailsComponent } from './components/core/components/details/details.component';
import { FormComponent } from './components/core/components/form/form.component';
import { TableComponent } from './components/core/components/table/table.component';
import { ToastComponent } from './components/core/components/toast/toast/toast.component';

import { ExamsComponent } from './components/pages/exams/exams/exams/exams.component';
import { ExamDetailsComponent } from './components/pages/exams/exam-details/exam-details.component';
import { ExamFormComponent } from './components/pages/exams/exam-form/exam-form/exam-form.component';
import { NotificationsComponent } from './components/pages/notifications/notifications/notifications.component';
import { TableFormComponent } from './components/pages/time-tables/table-form/table-form.component';
import { TablesComponent } from './components/pages/time-tables/tables/tables.component';
import { TableDetailComponent } from './components/pages/time-tables/table-detail/table-detail/table-detail.component';
import { GradeDetailsComponent } from './components/pages/grades/grade-details/grade-details.component';
import { GradesComponent } from './components/pages/grades/grades/grades.component';
import { GradeFormComponent } from './components/pages/grades/grade-form/grade-form.component';
import { TypesComponent } from './components/pages/exam-types/types/types.component';
import { TypeDetailsComponent } from './components/pages/exam-types/type-details/type-details.component';
import { TypeFormComponent } from './components/pages/exam-types/type-form/type-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SettingsComponent,

    LoginComponent,
    RegisterComponent,
    UsersComponent,
    
    HomeComponent,
    TableComponent,     // CORE
    FormComponent,      // CORE
    DetailsComponent,   // CORE
    ToastComponent,     // CORE
    
    StudentsComponent,
    StudentFormComponent,
    StudentDetailComponent,
    
    TeachersComponent,
    TeacherFormComponent,
    TeacherDetailComponent,
    
    CertificatesComponent,
    CertificateFormComponent,
    CertificateDetailsComponent,

    SubjectFormComponent,
    SubjectsComponent,
    SubjectDetailsComponent,

    ReportsComponent,
    ReportDetailsComponent,

    ExamsComponent,
    ExamFormComponent,
    ExamDetailsComponent,

    NotificationsComponent,
    
    TableFormComponent,
    TablesComponent,
    TableDetailComponent,
    
    GradesComponent,
    GradeFormComponent,
    GradeDetailsComponent,
    TypesComponent,
    TypeDetailsComponent,
    TypeFormComponent,
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
        path: 'student/edit/:id',
        component: StudentFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'student/details/:id',
        component: StudentDetailComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'teachers', 
        component: TeachersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'teacher/new', 
        component: TeacherFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'teacher/edit/:id',
        component: TeacherFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'teacher/details/:id',
        component: TeacherDetailComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'grades', 
        component: GradesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'grade/new', 
        component: GradeFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'grade/edit/:id',
        component: TeacherFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'grade/details/:id',
        component: GradeDetailsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'certificates', 
        component: CertificatesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'certificate/new', 
        component: CertificateFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'subjects', 
        component: SubjectsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'subject/new', 
        component: SubjectFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'exams', 
        component: ExamsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'exam/new', 
        component: ExamFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'time-tables', 
        component: TablesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'time-table/new', 
        component: TableFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'reports', 
        component: ReportsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'notifications', 
        component: NotificationsComponent,
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
