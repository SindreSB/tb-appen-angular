import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CleaningList } from '../shared/washlist/cleaning-list';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'tb-washlist-overview',
  templateUrl: './washlist-overview.component.html',
  styleUrls: ['./washlist-overview.component.css']
})
export class WashlistOverviewComponent implements OnInit {

  cleaningList: Observable<CleaningList>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.cleaningList = this.apiService.getCleaninglist();
  }

}
