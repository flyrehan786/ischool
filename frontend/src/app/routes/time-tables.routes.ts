import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard';
import { TableDetailComponent } from '../components/pages/time-tables/table-detail/table-detail/table-detail.component';
import { TableFormComponent } from '../components/pages/time-tables/table-form/table-form.component';
import { TablesComponent } from '../components/pages/time-tables/tables/tables.component';

export const teacherRoutes: Routes = [
    {
        path: 'time-tables',
        component: TablesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'time-table/new',
        component: TableFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'time-table/edit/:id',
        component: TableFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'time-table/details/:id',
        component: TableDetailComponent,
        canActivate: [AuthGuard]
    }
];
