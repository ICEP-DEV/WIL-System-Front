import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';

import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';
import { FormsComponent } from './forms/forms.component';
import { AppRoutingModule } from './app-routing.module';
import { InternlifeComponent } from './internlife/internlife.component';
import { CommonModule } from '@angular/common';

import {WilService} from './wil.service';
import { HeaderComponent } from './header/header.component'

import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    
    AppComponent,
    SidenavComponent,
    MainComponent,
    FormsComponent,
    InternlifeComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [WilService],


  bootstrap: [AppComponent]
})
export class AppModule { }
