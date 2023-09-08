import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard';
import { HomeComponent } from '../components/pages/home/home.component';

export const teacherRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
];
