import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRequiredFeeInfoFormComponent } from './student-required-fee-info-form.component';

describe('StudentRequiredFeeInfoFormComponent', () => {
  let component: StudentRequiredFeeInfoFormComponent;
  let fixture: ComponentFixture<StudentRequiredFeeInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRequiredFeeInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRequiredFeeInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
