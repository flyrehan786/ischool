import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// PAGES
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
import { TableComponent } from './components/core/table/table.component';
import { FormComponent } from './components/core/form/form.component';
import { DetailsComponent } from './components/core/details/details.component';
import { DragAndDropComponent } from './components/core/drag-and-drop/drag-and-drop.component';
import { TabComponent } from './components/core/tab/tab.component';

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
    DragAndDropComponent,
    TabComponent,
    StudentDetailComponent,
    TeacherDetailComponent,
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
