import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { AUTH_DOMAIN, AUTH_CLIENT_ID } from '../settings';
import { Router, NavigationStart } from '@angular/router';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  lock = new Auth0Lock(AUTH_CLIENT_ID, AUTH_DOMAIN, {auth: {
    params: {scope: 'openid name picture roles'},
  }});

  /*constructor(private router: Router) {
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      console.log(authResult);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('name', authResult.idTokenPayload.name);
      localStorage.setItem('picture', authResult.idTokenPayload.picture);
      localStorage.setItem('roles', authResult.idTokenPayload.roles);
      if(this.authenticated()){
        console.log("Was about to navigate to origin");
        console.log(localStorage);
        //window.open(location.origin, '_top');
      }
    });
   }*/
   constructor(public router: Router) {
      this
        .router
        .events
        .filter(event => event instanceof NavigationStart)
        .filter((event: NavigationStart) => (/access_token|id_token|error/).test(event.url))
        .subscribe(() => {
          this.lock.resumeAuth(window.location.hash, (error, authResult) => {
            if (error) { return console.log(error); }
            this.saveAuthResult(authResult);
            this.router.navigate(['/']);
          });
      });
  }

  saveAuthResult(authResult) {
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('name', authResult.idTokenPayload.name);
    localStorage.setItem('picture', authResult.idTokenPayload.picture);
    localStorage.setItem('roles', authResult.idTokenPayload.roles);
  }

   public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public getToken() {
    return localStorage.getItem('id_token');
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('name');
    localStorage.removeItem('picture');
    localStorage.removeItem('roles');
    this.router.navigateByUrl('/login');
    location.reload(true);
  }
}
