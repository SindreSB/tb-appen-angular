import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule, RequestOptions, Http } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WashlistGeneratorComponent } from './washlist-generator/washlist-generator.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PointsOverviewComponent } from './points-overview/points-overview.component';
import { PointsRegistrationComponent } from './points-registration/points-registration.component';
import { WashlistDisplayComponent } from './washlist-display/washlist-display.component';
import { PointsHighscoreComponent } from './points-highscore/points-highscore.component';
import { WashlistInputComponent } from './washlist-input/washlist-input.component';
import { ApiService } from './services/api.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'auth0-lock';
import 'hammerjs';
import { WashlistOverviewComponent } from './washlist-overview/washlist-overview.component';
import { NextWashdayComponent } from './next-washday/next-washday.component';

import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
      globalHeaders: [{'Content-Type': 'application/json'}],
    }), http, options);
}


@NgModule({
  declarations: [
    AppComponent,
    WashlistGeneratorComponent,
    FeedbackComponent,
    PointsOverviewComponent,
    PointsRegistrationComponent,
    WashlistDisplayComponent,
    PointsHighscoreComponent,
    WashlistInputComponent,
    LoginComponent,
    WashlistOverviewComponent,
    NextWashdayComponent,
    SettingsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApiService,
    AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthGuardService
  ],
  bootstrap: [AppComponent],
  entryComponents: [FeedbackComponent]
})
export class AppModule { }
