import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { ActivitiesComponent } from './activities/activities.component';
import { SystemSupportComponent } from './system-support/system-support.component';
import { TopnavComponent } from './topnav/topnav.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AssessmentsComponent } from './assessments/assessments.component';
import { LogEntriesComponent } from './log-entries/log-entries.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { Ass1Component } from './ass1/ass1.component';
import { Ass2Component } from './ass2/ass2.component';
import { PlacementinfoComponent } from './placementinfo/placementinfo.component';
import { PlacementdetailsComponent } from './placementdetails/placementdetails.component';
import { AddmentorComponent } from './addmentor/addmentor.component';
import { ChangementorComponent } from './changementor/changementor.component';
import { ChangeworkComponent } from './changework/changework.component';
import { AddworkComponent } from './addwork/addwork.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Add AppRoutingModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
