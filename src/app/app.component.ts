import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MdDialog } from '@angular/material';
import { FeedbackComponent } from './feedback/feedback.component';

@Component({
  selector: 'tb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tb works!';

  constructor(public auth: AuthService, public dialog: MdDialog) { }

  openFeedbackDialog() {
    console.log('Not implemented yet');
    this.dialog.open(FeedbackComponent);
  }
}
