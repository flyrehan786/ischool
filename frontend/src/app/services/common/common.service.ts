import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  getKeys(obj) {
    const keys = Object.keys(obj);
    console.log(keys);
    return keys;
  }
}
