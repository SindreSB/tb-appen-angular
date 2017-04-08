import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tb-points-registration',
  templateUrl: './points-registration.component.html',
  styleUrls: ['./points-registration.component.css']
})
export class PointsRegistrationComponent implements OnInit {

  points: number;

  constructor() { }

  ngOnInit() {
  }

}
