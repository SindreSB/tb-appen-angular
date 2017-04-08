import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tb-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackText: string;

  constructor() { }

  ngOnInit() {
  }

  sendFeedback() {
    console.log('Feedback \"sent\"');
  }

}
