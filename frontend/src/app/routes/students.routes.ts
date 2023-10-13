// app.routes.ts
import { Routes } from '@angular/router';
import { StudentDetailComponent } from '../components/pages/students/student-detail/student-detail.component';
import { StudentFormComponent } from '../components/pages/students/student-form/student-form/student-form.component';
import { StudentsComponent } from '../components/pages/students/students/students.component';
import { AuthGuard } from '../guards/auth-guard';
import { StudentEnrollComponent } from '../components/pages/students/student-enroll/student-enroll/student-enroll.component';
import { StudentEnrollmentsComponent } from '../components/pages/students/student-enrollments/student-enrollments.component';
import { StudentFeePaymentFormComponent } from '../components/pages/students/student-fee-payment-form/student-fee-payment-form.component';
import { StudentFeePaymentsComponent } from '../components/pages/students/student-fee-payments/student-fee-payments/student-fee-payments.component';
import { StudentIssueCertificateComponent } from '../components/pages/students/student-issue-certificate/student-issue-certificate/student-issue-certificate.component';
import { StudentExamResultsComponent } from '../components/pages/students/student-exam-results/student-exam-results/student-exam-results.component';
import { StudentEnrollmentDetailsComponent } from '../components/pages/students/student-enrollment-details/student-enrollment-details.component';
import { StudentIssuedCertificatesComponent } from '../components/pages/students/student-issued-certificates/student-issued-certificates.component';
import { StudentIssuedCertificateDetailsComponent } from '../components/pages/students/student-issued-certificate-details/student-issued-certificate-details.component';
import { StudentRequiredFeeInfoFormComponent } from '../components/pages/students/student-required-fee-info-form/student-required-fee-info-form.component';
import { StudentRequiredFeeInfoComponent } from '../components/pages/students/student-required-fee-info/student-required-fee-info.component';

export const studentRoutes: Routes = [
    {
        path: 'students',
        component: StudentsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/issue/new/certificate/:id',
        component: StudentIssueCertificateComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/issued/certificates/:id',
        component: StudentIssuedCertificatesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/issued/certificate/details/:id',
        component: StudentIssuedCertificateDetailsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/issued/certificates',
        component: StudentIssuedCertificatesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/enroll/new/:id',
        component: StudentEnrollComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/fee/new',
        component: StudentFeePaymentFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/required/fee/info/new/:id',
        component: StudentRequiredFeeInfoFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/required/fee/info/:id',
        component: StudentRequiredFeeInfoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/fee/payments',
        component: StudentFeePaymentsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/enrollments/:id',
        component: StudentEnrollmentsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/enrollments',
        component: StudentEnrollmentsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/enrollment/details/:id',
        component: StudentEnrollmentDetailsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/new',
        component: StudentFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/exam/results',
        component: StudentExamResultsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/edit/:id',
        component: StudentFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/details/:id',
        component: StudentDetailComponent,
        canActivate: [AuthGuard]
    }
];
