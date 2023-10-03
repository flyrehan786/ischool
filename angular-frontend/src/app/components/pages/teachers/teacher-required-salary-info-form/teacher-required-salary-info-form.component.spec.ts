import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRequiredSalaryInfoFormComponent } from './teacher-required-salary-info-form.component';

describe('TeacherRequiredSalaryInfoFormComponent', () => {
  let component: TeacherRequiredSalaryInfoFormComponent;
  let fixture: ComponentFixture<TeacherRequiredSalaryInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherRequiredSalaryInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRequiredSalaryInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
