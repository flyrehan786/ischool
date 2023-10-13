import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-student-required-fee-info',
  templateUrl: './student-required-fee-info.component.html',
  styleUrls: ['./student-required-fee-info.component.css']
})
export class StudentRequiredFeeInfoComponent implements OnInit {
  studentId;
  requiredFeeInfo;
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  constructor(private _studentService: StudentsService, private _router: Router, private _route: ActivatedRoute) { }
  ngOnInit(): void {
    this.studentId = this._route.snapshot.paramMap.get('id');
    this.getRequiredFeeInfo();
  }

  getRequiredFeeInfo() {
    this._studentService.getRequiredFee(this.studentId).subscribe(res => {
      this.requiredFeeInfo = res;
    })
  }

  deleteRequiredFeeInfo(id) {
    this._studentService.deleteRequiredFee(id).subscribe(
      (res: HttpResponse<any>) => {
        this.toastComponent.show('(Required Fee Deleted Successfully).', true, false, false);
        setTimeout(() => {
          this._router.navigateByUrl('/students');
        }, 1500);
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Deleting Required Fee API Failed).', false, true, false);
      })
  }

}
