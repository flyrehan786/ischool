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
        path: 'student/fee/payments',
        component: StudentFeePaymentsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/enrollments/:id',
        component: StudentEnrollmentsComponent,
        canActivate: [AuthGuard]
    },
    // 
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
