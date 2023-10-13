import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(private http: HttpClient) { }
  getStudent(id) {
    return this.http.get(environment.api + `api/students/${id}`);
  }
  getStudents() { 
    return this.http.get(environment.api + 'api/students');
  }
  postStudent(newStudent) {
    return this.http.post(environment.api + 'api/students', newStudent);
  }
  putStudent(id, updatedStudent) {
    return this.http.put(environment.api + 'api/students/' + id, updatedStudent);
  }
  deleteStudent(id) {
    return this.http.delete(environment.api + 'api/students/' + id);
  }
  disableStudent(id) {
    return this.http.put(environment.api + 'api/students/disable/' + id, {});
  }
  activateStudent(id) {
    return this.http.put(environment.api + 'api/students/activate/' + id, {});
  }
  postEnrollStudent(enrollmentInfo) {
    return this.http.post(environment.api + 'api/students/enroll', enrollmentInfo);
  }
  putStudentEnrollment(payload) {}
  deleteStudentEnrollment(enrollmentId) {
    return this.http.delete(environment.api + 'api/students/enrollments/' + enrollmentId);
  }
  getStudentEnrollments() {
    return this.http.get(environment.api + 'api/students/enrollments');
  }
  getStudentEnrollment(enrollmentId) {
    return this.http.get(environment.api + 'api/students/enrollments/' + enrollmentId);
  }
  getStudentEnrollmentsAgaintStudent(studentId) {
    return this.http.get(environment.api + 'api/students/enrollments/student/' + studentId);

  }
  disableStudentEnrollment(id, studentId) {
    return this.http.put(environment.api + 'api/students/enroll/disable/' + id, { student_id: studentId });
  }
  activateStudentEnrollment(id, studentId) {
    return this.http.put(environment.api + 'api/students/enroll/activate/' + id, { student_id: studentId });
  }
  
  getRequiredFee(studentId) {
    return this.http.get(environment.api + 'api/students/required/fee/info/' +  studentId);
  }

  postSubmitRequiredFee(payload) {
    return this.http.post(environment.api + 'api/students/required/fee/info', payload);
  }

  deleteRequiredFee(id) {
    return this.http.delete(environment.api + 'api/students/required/fee/info/' + id);
  }

  postSubmitExamResult(payload) {}
  putSubmitExamResult(payload) {}
  
  postSubmitFee(payload) {}
  putSubmitFee(payload) {}
  deleteSubmitFee(payload) {}
  postSubmitFeeSetting(payload) {}
  putSubmitFeeSetting(payload) {}
  deleteSubmitFeeSetting() {}
  
  postIssueCertificate(payload) {}
  putIssueCertificate(payload) {}
  deleteIssueCertificate() {}
  getIssuedCertificates() {}
  getIssuedCertificateAgainstStudent(studentId) {}
}
