import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() id: string;
  @Input() backToListRoute: string; 
  @Input() data: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
