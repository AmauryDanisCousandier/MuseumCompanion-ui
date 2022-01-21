import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-stats',
  templateUrl: './quick-stats.component.html',
  styleUrls: ['./quick-stats.component.scss']
})
export class QuickStatsComponent implements OnInit {

  gameNbr = 5;
  consoleNbr = 6;
  accessNbr = 12;
  constructor() { }

  ngOnInit(): void {
  }

}
