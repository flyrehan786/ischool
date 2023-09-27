import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherClassesAssignInfoFormComponent } from './teacher-classes-assign-info-form.component';

describe('TeacherClassesAssignedInfoFormComponent', () => {
  let component: TeacherClassesAssignInfoFormComponent;
  let fixture: ComponentFixture<TeacherClassesAssignInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherClassesAssignInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherClassesAssignInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
