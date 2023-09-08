import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard';
import { CertificateDetailsComponent } from '../components/pages/certificates/certificate-details/certificate-details/certificate-details.component';
import { CertificateFormComponent } from '../components/pages/certificates/certificate-form/certificate-form/certificate-form.component';
import { CertificatesComponent } from '../components/pages/certificates/certificates/certificates.component';

export const teacherRoutes: Routes = [
    {
        path: 'certificates',
        component: CertificatesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'certificate/new',
        component: CertificateFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'certificate/edit/:id',
        component: CertificateFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'certificate/details/:id',
        component: CertificateDetailsComponent,
        canActivate: [AuthGuard]
    }
];
