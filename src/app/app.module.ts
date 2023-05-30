import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegulationsComponent } from './components/regulations/regulations.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { SystemSupportComponent } from './components/system-support/system-support.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AssessmentsComponent } from './components/assessments/assessments.component';
import { LogEntriesComponent } from './components/log-entries/log-entries.component';
import { EvaluationsComponent } from './components/evaluations/evaluations.component';
import { Ass1Component } from './components/ass1/ass1.component';
import { Ass2Component } from './components/ass2/ass2.component';
import { PlacementinfoComponent } from './components/placementinfo/placementinfo.component';
import { PlacementdetailsComponent } from './components/placementdetails/placementdetails.component';
import { AddmentorComponent } from './components/addmentor/addmentor.component';
import { ChangementorComponent } from './components/changementor/changementor.component';
import { ChangeworkComponent } from './components/changework/changework.component';
import { AddworkComponent } from './components/addwork/addwork.component';

//


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { DatePipe } from '@angular/common';

import { LoginComponent } from './components/login/login.component';

import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { WILRegistrationComponent } from './components/wil-registration/wil-registration.component';
import { FooterComponent } from './components/footer/footer.component';
import { EpInformationComponent } from './components/ep-information/ep-information.component';
import { PracticeComponent } from './practice/practice.component';


import { PlacementLetterComponent } from './components/placement-letter/placement-letter.component';
import { ReAdmissionComponent } from './components/re-admission/re-admission.component';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { SuccessRespondComponent } from './components/success-respond/success-respond.component';
import { RegistrationDataComponent } from './components/registration-data/registration-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegulationsComponent,
    
    ActivitiesComponent,
    SystemSupportComponent,
    TopnavComponent,
    NotificationsComponent,
    AssessmentsComponent,
    LogEntriesComponent,
    EvaluationsComponent,
    Ass1Component,
    Ass2Component,
    PlacementinfoComponent,
    PlacementdetailsComponent,
    AddmentorComponent,
    ChangementorComponent,
    ChangeworkComponent,
    AddworkComponent,
    //
    AppComponent,
    LoginComponent,
    RecommendationComponent,
    SidenavComponent,
    WILRegistrationComponent,
    FooterComponent,
    EpInformationComponent,
    PlacementLetterComponent,
    ReAdmissionComponent,
    DeclarationComponent,
    SuccessRespondComponent,
    RegistrationDataComponent,
    
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Add AppRoutingModule here
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DatePipe,],
  bootstrap: [AppComponent]
})
export class AppModule { }