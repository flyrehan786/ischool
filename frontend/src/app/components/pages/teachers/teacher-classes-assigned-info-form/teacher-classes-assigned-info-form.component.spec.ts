import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherClassesAssignedInfoFormComponent } from './teacher-classes-assigned-info-form.component';

describe('TeacherClassesAssignedInfoFormComponent', () => {
  let component: TeacherClassesAssignedInfoFormComponent;
  let fixture: ComponentFixture<TeacherClassesAssignedInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherClassesAssignedInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherClassesAssignedInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
