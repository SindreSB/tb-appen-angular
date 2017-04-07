import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'tb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tb works!';

  constructor(public auth: AuthService) { }
}
