import { Component, OnInit, Input } from '@angular/core';
import { IHighscoreResult } from '../shared/models';

@Component({
  selector: 'tb-points-highscore',
  templateUrl: './points-highscore.component.html',
  styleUrls: ['./points-highscore.component.css']
})
export class PointsHighscoreComponent implements OnInit {

  @Input() highscore: IHighscoreResult[];

  constructor() { }

  ngOnInit() {
  }

}
