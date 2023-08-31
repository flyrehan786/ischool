import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private dynamicEventSubject = new Subject<any>();
  constructor() { }
  publishEvent(eventData: any) {
    this.dynamicEventSubject.next(eventData);
  }
  getEvent(): Observable<any> {
    return this.dynamicEventSubject.asObservable();
  }
  getKeys(obj) {
    const keys = Object.keys(obj);
    return keys;
  }
}
