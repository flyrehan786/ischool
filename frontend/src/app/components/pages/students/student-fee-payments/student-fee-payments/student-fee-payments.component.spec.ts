import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFeePaymentsComponent } from './student-fee-payments.component';

describe('StudentFeePaymentsComponent', () => {
  let component: StudentFeePaymentsComponent;
  let fixture: ComponentFixture<StudentFeePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFeePaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFeePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
