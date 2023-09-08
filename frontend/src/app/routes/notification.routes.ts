import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard';
import { NotificationsComponent } from '../components/pages/notifications/notifications/notifications.component';

export const notificationRoutes: Routes = [
    {
        path: 'notifications',
        component: NotificationsComponent,
        canActivate: [AuthGuard]
    }
];
