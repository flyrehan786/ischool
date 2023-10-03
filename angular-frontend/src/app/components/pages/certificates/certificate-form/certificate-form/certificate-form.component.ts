import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IControl } from 'src/app/components/core/components/form/deps/IControl';
import { TYPE_radio, TYPE_text, TYPE_textarea } from 'src/app/components/core/components/form/deps/control-types';
import { VALIDATION_MESSAGES } from 'src/app/components/core/components/form/deps/validation-messages';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { CertificatesService } from 'src/app/services/certificates/certificates.service';

@Component({
  selector: 'app-certificate-form',
  templateUrl: './certificate-form.component.html',
  styleUrls: ['./certificate-form.component.css']
})
export class CertificateFormComponent implements OnInit {
  certificateId;
  editMode = false;
  certificate;
  formTitle = 'New Certificate';
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  config: IControl[] = [
    {
      type: TYPE_text,
      key: 'name', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-12'
    },
    {
      type: TYPE_textarea,
      key: 'template', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '2', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-12'
    }
  ];
  constructor(private _route: ActivatedRoute, private _certificateService: CertificatesService, private _router: Router) { }

  ngOnInit(): void {
    this.certificateId = this._route.snapshot.paramMap.get('id');
    if (this.certificateId) {
      this.editMode = true;
      this.formTitle = 'Edit Student';
      this.getCertificate();

    }
  }
  getCertificate() {
    this._certificateService.getCertificate(this.certificateId).subscribe(student => {
      this.certificate = student;
      this.config.forEach(c => {
        if (c.key == 'name') c.defaultValue = this.certificate.name;
        if (c.key == 'template') c.defaultValue = this.certificate.template;
      })
    })
  }
  onSubmit(e) {
    if (this.editMode) {
      this._certificateService.putCertificate(this.certificateId, e).subscribe(
        (res: HttpResponse<any>) => {
          this.toastComponent.show('(Certificate Updated Successfully).', true, false, false);
          setTimeout(() => {
            this._router.navigateByUrl('/certificates');
          }, 1500)
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastComponent.show('(Updating Certificate API Failed).', false, true, false);
        })
    }
    else {
      this._certificateService.postIssueCertificate(e).subscribe(
        (res: HttpResponse<any>) => {
          this.toastComponent.show('(Certificate Created Successfully).', true, false, false);
          setTimeout(() => {
            this._router.navigateByUrl('/certificates');
          }, 1500);
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastComponent.show('(Adding Certificate API Failed).', false, true, false);
        })
    }
  }
}
