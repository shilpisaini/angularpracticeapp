import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-practice-app';
  pdata = 'I am from Parent Component';
  pcdata:string;

  receiveValue($event){
    this.pcdata= $event;
  }
}
