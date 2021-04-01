import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupPageComponent} from './pages/signup-page/signup-page.component'
import {StreamerDashboardPageComponent} from './pages/dashboard/streamer-dashboard-page/streamer-dashboard-page.component'

const routes: Routes = [
  {path:'streamers-dashboard', component:StreamerDashboardPageComponent},
  {path:'signup', component:SignupPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
