import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IControl } from 'src/app/components/core/components/form/deps/IControl';
import { TYPE_dropdown } from 'src/app/components/core/components/form/deps/control-types';
import { VALIDATION_MESSAGES } from 'src/app/components/core/components/form/deps/validation-messages';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { CertificatesService } from 'src/app/services/certificates/certificates.service';

@Component({
  selector: 'app-student-issue-certificate',
  templateUrl: './student-issue-certificate.component.html',
  styleUrls: ['./student-issue-certificate.component.css']
})
export class StudentIssueCertificateComponent implements OnInit {
  studentId;
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  config: IControl[] = [
    {
      type: TYPE_dropdown,
      key: 'certificate_id', defaultValue: '', label: 'Certificate',
      options: [],
      validators: [
        { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
      ],
      visible: true,
      bsCols: 'col-md-2'
    },
  ];
  certificates;
  formTitle = 'Issue Certificate'
  constructor(private _certificateService: CertificatesService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.getCertificates();
    this.studentId = this._route.snapshot.paramMap.get('id');
  }
  getCertificates() {
    this._certificateService.getCertificates().subscribe(certificates => {
      this.certificates = certificates;
      this.setupCertificateFormControlOptions();
    })
  }
  setupCertificateFormControlOptions() {
    this.certificates.forEach(g => {
      this.config.forEach(x => {
        if (x.key == 'certificate_id') {
          x.options.push({ key: g.id, value: g.name })
        }
      })
    })
  }
  onSubmit(e) {
    e.student_id = this.studentId;
    console.log(e);

    this._certificateService.postIssueCertificate(e).subscribe(
      (res: HttpResponse<any>) => {
        this.toastComponent.show('(Certificate Issued Successfully).', true, false, false);
        setTimeout(() => {
          this._router.navigateByUrl('/student/details/' + this.studentId);
        }, 1500);
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Certificate Issue API Failed).', false, true, false);
      })
  }
}
