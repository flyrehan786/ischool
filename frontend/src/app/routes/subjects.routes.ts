import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard';
import { SubjectDetailsComponent } from '../components/pages/subjects/subject-details/subject-details/subject-details.component';
import { SubjectFormComponent } from '../components/pages/subjects/subject-form/subject-form/subject-form.component';
import { SubjectsComponent } from '../components/pages/subjects/subjects/subjects/subjects.component';

export const subjectRoutes: Routes = [
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
        path: 'subject/edit/:id',
        component: SubjectFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'subject/details/:id',
        component: SubjectDetailsComponent,
        canActivate: [AuthGuard]
    }
];
