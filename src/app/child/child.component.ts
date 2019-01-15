import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  cdata = 'I am from Child component';
  @Output() msgEvent = new EventEmitter<string>();
  @Input() cpdata:string;
  constructor() { }

  ngOnInit() {
  }

  emitChild(){
    this.msgEvent.emit(this.cdata);
  }
}
