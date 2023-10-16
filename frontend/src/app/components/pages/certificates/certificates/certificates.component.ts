import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CertificatesService } from 'src/app/services/certificates/certificates.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  isLoading = false;
  eventLabel = '_certificate_event';
  title;
  headers = [ 'name', 'template', 'created_at' ];
  rows;
  filters = [ 'name' ];
  constructor(private _certificatesService: CertificatesService, private _commonService: CommonService, private _router: Router) { }
  ngOnInit(): void {
    this.getCertificates();
    this._commonService.getEvent().subscribe(e => {
      if(e.event == this.eventLabel) {
        this._router.navigateByUrl("/certificate/details/" + e.id);
      }
    })
  }
  getCertificates() {
    this.isLoading = true;
    this._certificatesService.getCertificates().subscribe(res => {
      this.rows = res;
      this.isLoading = false;
    });
  }
}
