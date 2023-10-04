import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnrollmentsAgainstStudentComponent } from './student-enrollments-against-student.component';

describe('StudentEnrollmentsAgainstStudentComponent', () => {
  let component: StudentEnrollmentsAgainstStudentComponent;
  let fixture: ComponentFixture<StudentEnrollmentsAgainstStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEnrollmentsAgainstStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEnrollmentsAgainstStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
