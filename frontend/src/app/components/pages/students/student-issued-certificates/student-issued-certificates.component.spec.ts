import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIssuedCertificatesComponent } from './student-issued-certificates.component';

describe('StudentIssuedCertificatesComponent', () => {
  let component: StudentIssuedCertificatesComponent;
  let fixture: ComponentFixture<StudentIssuedCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentIssuedCertificatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIssuedCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
