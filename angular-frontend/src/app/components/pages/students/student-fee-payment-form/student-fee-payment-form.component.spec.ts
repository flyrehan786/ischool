import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFeePaymentFormComponent } from './student-fee-payment-form.component';

describe('StudentFeePaymentFormComponent', () => {
  let component: StudentFeePaymentFormComponent;
  let fixture: ComponentFixture<StudentFeePaymentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFeePaymentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFeePaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
