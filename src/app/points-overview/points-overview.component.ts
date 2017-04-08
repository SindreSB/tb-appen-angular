import { Component, OnInit } from '@angular/core';
import { HighscoreResult } from '../shared/models';

@Component({
  selector: 'tb-points-overview',
  templateUrl: './points-overview.component.html',
  styleUrls: ['./points-overview.component.css']
})
export class PointsOverviewComponent implements OnInit {

  highscore: HighscoreResult[];

  constructor() { }

  ngOnInit() {
  }

}
