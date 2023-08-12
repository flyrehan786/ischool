import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap'; // Import Bootstrap JavaScript

@Component({
  selector: 'core-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  message: string;
  success: boolean;
  error: boolean;
  warning: boolean;
  constructor() { }
  ngOnInit(): void {
  }
  show(message, _success, _error, _warning) {
    this.message = message;
    this.success = _success;
    this.error = _error;
    this.warning = _warning;
    
    const liveToast = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(liveToast); 
    toast.show(); 
  }
}
