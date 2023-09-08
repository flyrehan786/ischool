// app.routes.ts
import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard';
import { GradesComponent } from '../components/pages/grades/grades/grades.component';
import { GradeDetailsComponent } from '../components/pages/grades/grade-details/grade-details.component';
import { GradeFormComponent } from '../components/pages/grades/grade-form/grade-form.component';

export const teacherRoutes: Routes = [
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
    component: GradeFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'grade/details/:id',
    component: GradeDetailsComponent,
    canActivate: [AuthGuard]
  }
];
