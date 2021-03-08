import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()  name: string;
  @Output() nameChange = new EventEmitter<string>();
  constructor() { 
    this.name = '';
  }
  ngOnInit(): void {
  }

}
