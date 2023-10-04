import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  constructor(private http: HttpClient) { }
  getCertificate(id) {
    return this.http.get(environment.api + `api/certificates/${id}`);
  }
  getCertificates() { 
    return this.http.get(environment.api + 'api/certificates');
  }
  getIssuedCertificates() { 
    return this.http.get(environment.api + 'api/certificates/issued');
  }
  postCertificate(newCertificate) {
    return this.http.post(environment.api + 'api/certificates', newCertificate);
  }
  postIssueCertificate(newIssueCertificate) {
    return this.http.post(environment.api + 'api/certificates/issue/new', newIssueCertificate);
  }
  putCertificate(id, updatedCertificate) {
    return this.http.put(environment.api + 'api/certificates/' + id, updatedCertificate);
  }
  deleteCertificate(id) {
    return this.http.delete(environment.api + 'api/certificates/' + id);
  }
}
