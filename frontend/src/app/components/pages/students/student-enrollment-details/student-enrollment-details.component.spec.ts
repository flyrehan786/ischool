import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnrollmentDetailsComponent } from './student-enrollment-details.component';

describe('StudentEnrollmentDetailsComponent', () => {
  let component: StudentEnrollmentDetailsComponent;
  let fixture: ComponentFixture<StudentEnrollmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEnrollmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEnrollmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
