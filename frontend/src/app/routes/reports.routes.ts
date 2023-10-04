import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard';
import { ReportsComponent } from '../components/pages/reports/reports/reports.component';

export const reportsRoutes: Routes = [
    {
        path: 'reports',
        component: ReportsComponent,
        canActivate: [AuthGuard]
    }
];
