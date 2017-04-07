import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WashlistGeneratorComponent } from './washlist-generator/washlist-generator.component';
import { WashlistOverviewComponent } from './washlist-overview/washlist-overview.component';
import { LoginComponent } from './login/login.component';
import { PointsOverviewComponent } from './points-overview/points-overview.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: '', component: PointsOverviewComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent},
  { path: 'loggedin', pathMatch: 'full', redirectTo: '', canActivate: [AuthGuardService] },
  { path: 'washlist', component: WashlistOverviewComponent, canActivate: [AuthGuardService] },
  { path: 'washlist/generate', component: WashlistGeneratorComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
