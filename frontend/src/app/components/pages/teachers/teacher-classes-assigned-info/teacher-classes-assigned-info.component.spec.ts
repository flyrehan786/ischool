import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherClassesAssignedInfoComponent } from './teacher-classes-assigned-info.component';

describe('TeacherClassesAssignedInfoComponent', () => {
  let component: TeacherClassesAssignedInfoComponent;
  let fixture: ComponentFixture<TeacherClassesAssignedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherClassesAssignedInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherClassesAssignedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
