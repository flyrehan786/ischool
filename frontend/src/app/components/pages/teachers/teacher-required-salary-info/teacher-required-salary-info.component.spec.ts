import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRequiredSalaryInfoComponent } from './teacher-required-salary-info.component';

describe('TeacherRequiredSalaryInfoComponent', () => {
  let component: TeacherRequiredSalaryInfoComponent;
  let fixture: ComponentFixture<TeacherRequiredSalaryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherRequiredSalaryInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRequiredSalaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
