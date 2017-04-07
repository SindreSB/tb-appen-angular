import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { AUTH_DOMAIN, AUTH_CLIENT_ID } from '../settings';
import { Router } from '@angular/router';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  lock = new Auth0Lock(AUTH_CLIENT_ID, AUTH_DOMAIN, {auth: {
    params: {scope: 'openid name picture roles'},
  }});

  constructor(private router: Router) {
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      console.log(authResult);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('name', authResult.idTokenPayload.name);
      localStorage.setItem('picture', authResult.idTokenPayload.picture);
      localStorage.setItem('roles', authResult.idTokenPayload.roles);
      window.open(location.origin, '_self');
    });
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
