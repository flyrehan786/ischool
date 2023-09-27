// app.routes.ts
import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard';
import { TeacherDetailComponent } from '../components/pages/teachers/teacher-detail/teacher-detail.component';
import { TeacherFormComponent } from '../components/pages/teachers/teacher-form/teacher-form/teacher-form.component';
import { TeachersComponent } from '../components/pages/teachers/teachers/teachers.component';
import { TeacherClassesAssignInfoFormComponent as TeacherClassesAssignInfoFormComponent } from '../components/pages/teachers/teacher-classes-assign-info-form/teacher-classes-assign-info-form.component';

export const teacherRoutes: Routes = [
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
    path: 'teacher/assign/class/:id',
    component: TeacherClassesAssignInfoFormComponent,
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
  }
];
