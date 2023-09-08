// app.routes.ts
import { Routes } from '@angular/router';
import { StudentDetailComponent } from '../components/pages/students/student-detail/student-detail.component';
import { StudentFormComponent } from '../components/pages/students/student-form/student-form/student-form.component';
import { StudentsComponent } from '../components/pages/students/students/students.component';
import { AuthGuard } from '../guards/auth-guard';

export const studentRoutes: Routes = [
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
    }
];
