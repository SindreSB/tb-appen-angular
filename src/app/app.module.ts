import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
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

import 'auth0-lock';
import 'hammerjs';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
