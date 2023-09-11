import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard';
import { LoginComponent } from '../components/pages/auth/login/login.component';
import { RegisterComponent } from '../components/pages/auth/register/register.component';
import { UsersComponent } from '../components/pages/auth/users/users.component';
import { UsersDetailsComponent } from '../components/pages/auth/users-details/users-details.component';

export const authRoutes: Routes = [
    {
        path: 'auth/login',
        component: LoginComponent
    },
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
        path: 'auth/users/details/:id',
        component: UsersDetailsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'auth/manage',
        component: UsersComponent,
        canActivate: [AuthGuard]
    }
];
