import { Component, OnInit } from '@angular/core';
import { IHighscoreResult } from '../shared/models';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tb-points-overview',
  templateUrl: './points-overview.component.html',
  styleUrls: ['./points-overview.component.css']
})
export class PointsOverviewComponent implements OnInit {

  points: Observable<number>;
  highscore: IHighscoreResult[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.points = this.apiService.getPointsForUser();
  }

  registerPoint(event) {
    this.apiService.postPointForUser(event);
  }

}
