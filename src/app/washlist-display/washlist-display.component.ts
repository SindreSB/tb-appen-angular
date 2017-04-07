import { Component, OnInit, Input } from '@angular/core';
import { WashdayAssignment } from '../shared/models';


@Component({
  selector: 'tb-washlist-display',
  templateUrl: './washlist-display.component.html',
  styleUrls: ['./washlist-display.component.css']
})
export class WashlistDisplayComponent implements OnInit {

  @Input() washlist: WashdayAssignment[];

  @Input() enablePrint = false;

  constructor() { }

  ngOnInit() {
  }

}
