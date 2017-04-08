import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

enum OnboardState {
    NotAuthenticated,
    AuthenticatedCheckingRoom,
    AuthenticatedFirstTime,
    AuthenticationComplete,
    Authenticated
}

@Component({
  selector: 'tb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public roomNumber: number;
    public movedInDate: Date;

    private onboardingState: OnboardState;

    constructor(public auth: AuthService, public router: Router) { }

    ngOnInit() {
        this.onboardingState = OnboardState.NotAuthenticated;
    }

    shouldShow(state: number): boolean {
            return this.onboardingState === state;
    }

    isRoomnumberSet(): boolean {
        if (localStorage.getItem('roomnumber')) {
            return true;
        }
        return false;
    }

    registerRental() {

    }

    continueToApp() {
        this.router.navigateByUrl("/");
    }

}
