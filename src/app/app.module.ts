import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';
import { FormsComponent } from './forms/forms.component';
import { AppRoutingModule } from './app-routing.module';
import { InternlifeComponent } from './internlife/internlife.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainComponent,
    FormsComponent,
    InternlifeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
