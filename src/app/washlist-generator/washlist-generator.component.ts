import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { WashdayAssignment } from '../shared/models';
import { CleaningList } from '../shared/washlist/cleaning-list';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
  selector: 'tb-washlist-generator',
  templateUrl: './washlist-generator.component.html',
  styleUrls: ['./washlist-generator.component.css']
})
export class WashlistGeneratorComponent implements OnInit {

  asyncCleaningList: ReplaySubject<CleaningList> = new ReplaySubject(1);

  washlist: WashdayAssignment[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  generateWashlist(params) {
    this.apiService.generateWashlist(params).map(value => new CleaningList(value)).subscribe(success => {
      this.asyncCleaningList.next(success);
      this.washlist = success.getWashdayAssignments();
      console.log(this.washlist);
    });
  }

  saveWashlist() {
    this.apiService.saveWashlist(this.washlist);
  }
}
