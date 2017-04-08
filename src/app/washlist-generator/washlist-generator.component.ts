import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { WashdayAssignment } from '../shared/models';
import { CleaningList } from '../shared/washlist/cleaning-list';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'tb-washlist-generator',
  templateUrl: './washlist-generator.component.html',
  styleUrls: ['./washlist-generator.component.css']
})
export class WashlistGeneratorComponent implements OnInit {

  asyncCleaningList: Observable<CleaningList>;

  washlist: WashdayAssignment[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  generateWashlist(params) {
    this.asyncCleaningList = this.apiService.generateWashlist(params).map(value => new CleaningList(value));
  }
}
