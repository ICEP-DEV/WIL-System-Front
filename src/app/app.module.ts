import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { WILRegistrationComponent } from './components/wil-registration/wil-registration.component';
import { FooterComponent } from './components/footer/footer.component';
import { EpInformationComponent } from './components/ep-information/ep-information.component';

import { PlacementLetterComponent } from './components/placement-letter/placement-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecommendationComponent,
    SidenavComponent,
    WILRegistrationComponent,
    FooterComponent,
    EpInformationComponent,
    PlacementLetterComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DatePipe,],
  bootstrap: [AppComponent]
})
export class AppModule { }
