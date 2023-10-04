import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard';
import { SettingsComponent } from '../components/pages/settings/settings.component';

export const settingsRoutes: Routes = [
    {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard]
    }
];
