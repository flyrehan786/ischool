import { HttpResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IControl } from 'src/app/components/core/components/form/deps/IControl';
import { TYPE_text } from 'src/app/components/core/components/form/deps/control-types';
import { VALIDATION_MESSAGES } from 'src/app/components/core/components/form/deps/validation-messages';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { SubjectsService } from 'src/app/services/subjects/subjects.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {
  subjectId;
  editMode = false;
  subject;
  formTitle = 'New Subject';
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  config: IControl[] = [
    {
      type: TYPE_text,
      key: 'name', defaultValue: '', label: 'Name',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(45) },
        ],
      visible: true,
      bsCols: 'col-md-2'
    },
  ];
  constructor(
    private cdr: ChangeDetectorRef,
    private _route: ActivatedRoute, 
    private _subjectService: SubjectsService, 
    private _router: Router) { }

  ngOnInit(): void {
    this.subjectId = this._route.snapshot.paramMap.get('id');
    if (this.subjectId) {
      this.editMode = true;
      this.formTitle = 'Edit Subject';
      this.getSubject();
    }
  }
  getSubject() {
    this._subjectService.getSubject(this.subjectId).subscribe(subject => {
      this.subject = subject;
      this.config.forEach(c => {
        if (c.key == 'name') c.defaultValue = this.subject.name;
        this.cdr.detectChanges();
      })
    })
  }
  onSubmit(e) {
    if (this.editMode) {
      this._subjectService.putStubject(this.subjectId, e).subscribe(
        (res: HttpResponse<any>) => {
          this.toastComponent.show('(Subject Updated Successfully).', true, false, false);
          setTimeout(() => {
            this._router.navigateByUrl('/subjects');
          }, 1500)
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastComponent.show('(Updating Subject API Failed).', false, true, false);
        })
    }
    else {
      this._subjectService.postSubject(e).subscribe(
        (res: HttpResponse<any>) => {
          this.toastComponent.show('(Subject Created Successfully).', true, false, false);
          setTimeout(() => {
            this._router.navigateByUrl('/subjects');
          }, 1500);
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastComponent.show('(Adding Subject API Failed).', false, true, false);
        })
    }
  }
}
