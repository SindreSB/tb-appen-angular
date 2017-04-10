import { Component, OnInit } from '@angular/core';
import { IHighscoreEntry } from '../shared/models';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tb-points-overview',
  templateUrl: './points-overview.component.html',
  styleUrls: ['./points-overview.component.css']
})
export class PointsOverviewComponent implements OnInit {

  points: Observable<number>;
  highscore: Observable<IHighscoreEntry[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.points = this.apiService.getPointsForUser();
    this.highscore = this.apiService.getTopFive();
  }

  registerPoint(event) {
    this.apiService.postPointForUser(event);
  }

}
