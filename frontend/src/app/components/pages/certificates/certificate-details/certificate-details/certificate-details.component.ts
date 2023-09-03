import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { CertificatesService } from 'src/app/services/certificates/certificates.service';

@Component({
  selector: 'app-certificate-details',
  templateUrl: './certificate-details.component.html',
  styleUrls: ['./certificate-details.component.css']
})
export class CertificateDetailsComponent implements OnInit {
  certificateId;
  certificate;
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  constructor(private _certificateService: CertificatesService, private _route: ActivatedRoute, private _router: Router) { }
  ngOnInit(): void {
    this.certificate = +this._route.snapshot.paramMap.get('id');
    this.getCertificate();
  }
  getCertificate() {
    this._certificateService.getCertificate(this.certificateId).subscribe(certificate => {
      this.certificate = certificate;
    },
    (error) => {
      console.error('An error occurred:', error);
      this.toastComponent.show('(Updating Certificate API Failed).', false, true, false);
    })
  }
  deleteCertificate() {
    if(confirm('Are you sure you want to delete this certificate?')) {
      this._certificateService.deleteCertificate(this.certificate).subscribe(res => {
        this._router.navigateByUrl('/certificates');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Updating Certificate API Failed).', false, true, false);
      });
    }
  }
}
