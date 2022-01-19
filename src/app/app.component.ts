import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  gameNbr = 5;
  consoleNbr = 6;
  accessNbr = 12;
  // @Input() gameNbr = Number;
  // @Input() consoleNbr = Number;
  // @Input() accessNbr = Number;
}
