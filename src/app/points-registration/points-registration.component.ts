import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tb-points-registration',
  templateUrl: './points-registration.component.html',
  styleUrls: ['./points-registration.component.css']
})
export class PointsRegistrationComponent implements OnInit {

  @Input() points: number;
  @Output() pointRegistered: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  registerPoint(action) {
    this.pointRegistered.emit(action);
  }
}
