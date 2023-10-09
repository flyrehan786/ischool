import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIssuedCertificateDetailsComponent } from './student-issued-certificate-details.component';

describe('StudentIssuedCertificateDetailsComponent', () => {
  let component: StudentIssuedCertificateDetailsComponent;
  let fixture: ComponentFixture<StudentIssuedCertificateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentIssuedCertificateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIssuedCertificateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
