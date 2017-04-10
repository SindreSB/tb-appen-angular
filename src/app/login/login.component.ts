import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { IRentalResponse } from '../shared/models';
import { MdSnackBar } from '@angular/material';

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
export class LoginComponent implements OnInit, AfterViewInit {

    waitingForServerReply = false;

    constructor(public auth: AuthService,
                public router: Router,
                public apiService: ApiService,
                public snackBar: MdSnackBar) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        if (!this.auth.isRoomnumberSet() && this.auth.authenticated()) {
            // Should try to fetch roomnumber from server
            this.waitingForServerReply = true;
            this.apiService.getRoomnumber().subscribe(success => {
                this.auth.setRoomnumber(success);
                this.router.navigate(['/']);
            }, error => {
                console.log(error);
                this.waitingForServerReply = false;
            });
        } else if (this.auth.isRoomnumberSet() && this.auth.authenticated()) {
            this.router.navigateByUrl('/');
        }
    }

    shouldShow(state: number): boolean {
        return false;
    }

    registerRoomnumber(roomnumber: string) {
        // TODO: enable registration
        this.waitingForServerReply = true;

        // Convert and validate (should be done using form)
        const room = Number.parseInt(roomnumber);
        // TODO: validate room

        this.apiService.registerRental(room, new Date()).subscribe(success => {
            this.waitingForServerReply = false;
            console.log(success);
            this.auth.setRoomnumber(success.roomNumber);
            this.openSnackBar('Success!');
            this.router.navigateByUrl('/');
        }, error => {
            this.waitingForServerReply = false;
            this.openSnackBar('Someting went wrong, please try again');
        });
    }

    showRoomRegistration(): boolean {
        return this.auth.authenticated() && !this.waitingForServerReply;
    }

    openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok');
  }
}
