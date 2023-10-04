import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
import { TimeTableService } from 'src/app/services/time-table/time-table.service';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css']
})
export class TableDetailComponent implements OnInit {
  timeTableId;
  timeTable;
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  constructor(private _timeTableService: TimeTableService, private _route: ActivatedRoute, private _router: Router) { }
  ngOnInit(): void {
    this.timeTableId = +this._route.snapshot.paramMap.get('id');
    this.getTimeTable();
  }
  getTimeTable() {
    this._timeTableService.getTimeTable(this.timeTableId).subscribe(timeTable => {
      this.timeTable = timeTable;
    },
    (error) => {
      console.error('An error occurred:', error);
      this.toastComponent.show('(Updating Time-Table API Failed).', false, true, false);
    })
  }
  deleteTimeTable() {
    if(confirm('Are you sure you want to delete this time-table?')) {
      this._timeTableService.deleteTable(this.timeTableId).subscribe(res => {
        this._router.navigateByUrl('/time-tables');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.toastComponent.show('(Updating Time-Table API Failed).', false, true, false);
      });
    }
  }
}
