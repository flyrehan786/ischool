import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard';
import { TypeDetailsComponent } from '../components/pages/exam-types/type-details/type-details.component';
import { TypeFormComponent } from '../components/pages/exam-types/type-form/type-form.component';
import { TypesComponent } from '../components/pages/exam-types/types/types.component';

export const teacherRoutes: Routes = [
    {
        path: 'exam-types',
        component: TypesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'exam-type/new',
        component: TypeFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'exam-type/edit/:id',
        component: TypeFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'exam-type/details/:id',
        component: TypeDetailsComponent,
        canActivate: [AuthGuard]
    }
];
