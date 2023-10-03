import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIssueCertificateComponent } from './student-issue-certificate.component';

describe('StudentIssueCertificateComponent', () => {
  let component: StudentIssueCertificateComponent;
  let fixture: ComponentFixture<StudentIssueCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentIssueCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIssueCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
