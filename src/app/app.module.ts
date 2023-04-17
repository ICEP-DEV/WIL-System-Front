import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';
import { FormsComponent } from './forms/forms.component';
import { AppRoutingModule } from './app-routing.module';
import { InternlifeComponent } from './internlife/internlife.component';
import { HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';

import {WilService} from './wil.service';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    
    AppComponent,
    SidenavComponent,
    MainComponent,
    FormsComponent,
    InternlifeComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [WilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
