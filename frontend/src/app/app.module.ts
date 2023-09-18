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
import { UsersDetailsComponent } from './components/pages/auth/users-details/users-details.component';

import { StudentsComponent } from './components/pages/students/students/students.component';
import { StudentFormComponent } from './components/pages/students/student-form/student-form/student-form.component';
import { StudentDetailComponent } from './components/pages/students/student-detail/student-detail.component';
import { StudentEnrollComponent } from './components/pages/students/student-enroll/student-enroll/student-enroll.component';
import { StudentExamResultsComponent } from './components/pages/students/student-exam-results/student-exam-results/student-exam-results.component';
import { StudentIssueCertificateComponent } from './components/pages/students/student-issue-certificate/student-issue-certificate/student-issue-certificate.component';
import { StudentFeePaymentsComponent } from './components/pages/students/student-fee-payments/student-fee-payments/student-fee-payments.component';
import { StudentEnrollmentsComponent } from './components/pages/students/student-enrollments/student-enrollments.component';
import { StudentFeePaymentFormComponent } from './components/pages/students/student-fee-payment-form/student-fee-payment-form.component';
import { StudentEnrollmentDetailsComponent } from './components/pages/students/student-enrollment-details/student-enrollment-details.component';
import { StudentEnrollmentsAgainstStudentComponent } from './components/pages/students/student-enrollments-against-student/student-enrollments-against-student.component';


import { TeachersComponent } from './components/pages/teachers/teachers/teachers.component';
import { TeacherFormComponent } from './components/pages/teachers/teacher-form/teacher-form/teacher-form.component';
import { TeacherDetailComponent } from './components/pages/teachers/teacher-detail/teacher-detail.component';
import { TeacherRequiredSalaryInfoComponent } from './components/pages/teachers/teacher-required-salary-info/teacher-required-salary-info.component';
import { TeacherRequiredSalaryInfoFormComponent } from './components/pages/teachers/teacher-required-salary-info-form/teacher-required-salary-info-form.component';
import { TeacherClassesAssignedInfoComponent } from './components/pages/teachers/teacher-classes-assigned-info/teacher-classes-assigned-info.component';
import { TeacherClassesAssignedInfoFormComponent } from './components/pages/teachers/teacher-classes-assigned-info-form/teacher-classes-assigned-info-form.component';


import { CertificateFormComponent } from './components/pages/certificates/certificate-form/certificate-form/certificate-form.component';
import { CertificatesComponent } from './components/pages/certificates/certificates/certificates.component';
import { CertificateDetailsComponent } from './components/pages/certificates/certificate-details/certificate-details/certificate-details.component';

import { SubjectsComponent } from './components/pages/subjects/subjects/subjects/subjects.component';
import { SubjectFormComponent } from './components/pages/subjects/subject-form/subject-form/subject-form.component';
import { SubjectDetailsComponent } from './components/pages/subjects/subject-details/subject-details/subject-details.component';

import { ReportsComponent } from './components/pages/reports/reports/reports.component';
import { ReportDetailsComponent } from './components/pages/reports/reports-details/report-details/report-details.component';

import { ExamsComponent } from './components/pages/exams/exams/exams/exams.component';
import { ExamDetailsComponent } from './components/pages/exams/exam-details/exam-details.component';
import { ExamFormComponent } from './components/pages/exams/exam-form/exam-form/exam-form.component';
import { ExamResultsComponent } from './components/pages/exams/exam-results/exam-results.component';

import { NotificationsComponent } from './components/pages/notifications/notifications/notifications.component';

// Time Table Components.
import { TableFormComponent } from './components/pages/time-tables/table-form/table-form.component';
import { TablesComponent } from './components/pages/time-tables/tables/tables.component';
import { TableDetailComponent } from './components/pages/time-tables/table-detail/table-detail/table-detail.component';

import { GradeDetailsComponent } from './components/pages/grades/grade-details/grade-details.component';
import { GradesComponent } from './components/pages/grades/grades/grades.component';
import { GradeFormComponent } from './components/pages/grades/grade-form/grade-form.component';

import { TypesComponent } from './components/pages/exam-types/types/types.component';
import { TypeDetailsComponent } from './components/pages/exam-types/type-details/type-details.component';
import { TypeFormComponent } from './components/pages/exam-types/type-form/type-form.component';

// CORE.
import { DetailsComponent } from './components/core/components/details/details.component';
import { FormComponent } from './components/core/components/form/form.component';
import { TableComponent } from './components/core/components/table/table.component';
import { ToastComponent } from './components/core/components/toast/toast/toast.component';



import { homeRoutes } from './routes/home.routes';
import { studentRoutes } from './routes/students.routes';
import { teacherRoutes } from './routes/teacher.routes';
import { gradeRoutes } from './routes/grades.routes';
import { examTypeRoutes } from './routes/exam-types.routes';
import { examRoutes } from './routes/exams.routes';
import { subjectRoutes } from './routes/subjects.routes';
import { certificateRoutes } from './routes/certificates.routes';
import { reportsRoutes } from './routes/reports.routes';
import { notificationRoutes } from './routes/notification.routes';
import { settingsRoutes } from './routes/settings.routes';
import { authRoutes } from './routes/auth.routes';
import { timeTableRoutes } from './routes/time-tables.routes';




// Routes

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
    StudentEnrollComponent,
    StudentExamResultsComponent,
    StudentIssueCertificateComponent,
    StudentFeePaymentsComponent,
    UsersDetailsComponent,
    ExamResultsComponent,
    StudentEnrollmentsComponent,
    StudentFeePaymentFormComponent,
    TeacherRequiredSalaryInfoComponent,
    TeacherRequiredSalaryInfoFormComponent,
    TeacherClassesAssignedInfoComponent,
    TeacherClassesAssignedInfoFormComponent,
    StudentEnrollmentDetailsComponent,
    StudentEnrollmentsAgainstStudentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      ...homeRoutes, 
      ...studentRoutes, 
      ...teacherRoutes, 
      ...gradeRoutes, 
      ...subjectRoutes, 
      ...timeTableRoutes,
      ...examTypeRoutes, 
      ...examRoutes, 
      ...certificateRoutes, 
      ...reportsRoutes, 
      ...notificationRoutes, 
      ...settingsRoutes, 
      ...authRoutes
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
