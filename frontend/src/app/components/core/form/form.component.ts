import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'core-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() config; 
  @Output() onSubmit = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
}
