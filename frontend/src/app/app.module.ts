import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SignupMenuComponent } from './components/signup-menu/signup-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StreamerDashboardPageComponent } from './pages/dashboard/streamer-dashboard-page/streamer-dashboard-page.component';
import { StreamerCabecalhoComponentComponent } from './components/streamer-cabecalho-component/streamer-cabecalho-component.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    SignupMenuComponent,
    StreamerDashboardPageComponent,
    StreamerCabecalhoComponentComponent,
    LoginComponent,
    LoginFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
