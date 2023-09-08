import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard';
import { ExamDetailsComponent } from '../components/pages/exams/exam-details/exam-details.component';
import { ExamFormComponent } from '../components/pages/exams/exam-form/exam-form/exam-form.component';
import { ExamsComponent } from '../components/pages/exams/exams/exams/exams.component';

export const teacherRoutes: Routes = [
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
        path: 'exam/edit/:id',
        component: ExamFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'exam/details/:id',
        component: ExamDetailsComponent,
        canActivate: [AuthGuard]
    }
];
