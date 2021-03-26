import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SignupMenuComponent } from './components/signup-menu/signup-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    SignupMenuComponent
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
