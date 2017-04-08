import { Component, OnInit, Input } from '@angular/core';
import { WashdayAssignment } from '../shared/models';
import { CleaningList } from '../shared/washlist/cleaning-list';


@Component({
  selector: 'tb-washlist-display',
  templateUrl: './washlist-display.component.html',
  styleUrls: ['./washlist-display.component.css']
})
export class WashlistDisplayComponent implements OnInit {

  @Input() cleaningList: CleaningList;

  @Input() enablePrint = false;

  constructor() { }

  ngOnInit() {
  }

}
