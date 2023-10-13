import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRequiredFeeInfoComponent } from './student-required-fee-info.component';

describe('StudentRequiredFeeInfoComponent', () => {
  let component: StudentRequiredFeeInfoComponent;
  let fixture: ComponentFixture<StudentRequiredFeeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRequiredFeeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRequiredFeeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
