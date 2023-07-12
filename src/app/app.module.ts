import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StudentService } from 'src/app/services/student.service';
import { RouterModule } from '@angular/router';

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
import { NotificationService } from 'src/app/services/notification.service';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { WILRegistrationComponent } from './components/wil-registration/wil-registration.component';
import { FooterComponent } from './components/footer/footer.component';
import { EpInformationComponent } from './components/ep-information/ep-information.component';
import { PracticeComponent } from './practice/practice.component';
import { InternlifeComponent } from './internlife/internlife.component';


import { PlacementLetterComponent } from './components/placement-letter/placement-letter.component';
import { ReAdmissionComponent } from './components/re-admission/re-admission.component';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { SuccessRespondComponent } from './components/success-respond/success-respond.component';
import { RegistrationDataComponent } from './components/registration-data/registration-data.component';
import { ReAdmissionFormComponent } from './components/re-admission-form/re-admission-form.component';
import { SystemDocumentationComponent } from './components/system-documentation/system-documentation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SysDocSubmittedComponent } from './components/sys-doc-submitted/sys-doc-submitted.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { ApplicantsComponent } from './components/applicants/applicants.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { AdminRejectComponent } from './components/admin-reject/admin-reject.component';
import { MentorInvitedComponent } from './components/mentor-invited/mentor-invited.component';
import { WorkPlaceSavedComponent } from './components/work-place-saved/work-place-saved.component';
import { MenteeListComponent } from './components/mentee-list/mentee-list.component';
import { MenteeLogsComponent } from './components/mentee-logs/mentee-logs.component';
import { MenteeRatingComponent } from './components/mentee-rating/mentee-rating.component';
import { StudentEvaluationComponent } from './components/student-evaluation/student-evaluation.component';
import { MentorHomeComponent } from './components/mentor-home/mentor-home.component';
import { MentorNavbarComponent } from './components/mentor-navbar/mentor-navbar.component';
import { MentorActivitiesComponent } from './components/mentor-activities/mentor-activities.component';
import { MentorNotificationComponent } from './components/mentor-notification/mentor-notification.component';
import { MentorInvitesComponent } from './components/mentor-invites/mentor-invites.component';
import { MentorLoginComponent } from './components/mentor-login/mentor-login.component';

import { SubmittedEvaluationComponent } from './components/submitted-evaluation/submitted-evaluation.component';
import { SubmittedQueryComponent } from './components/submitted-query/submitted-query.component';
import { WilHomeComponent } from './wil_co/wil-home/wil-home.component';
import { WilActivitiesComponent } from './wil_co/wil-activities/wil-activities.component';
import { WilRegulationsComponent } from './wil_co/wil-regulations/wil-regulations.component';
import { WilSystemSuppComponent } from './wil_co/wil-system-supp/wil-system-supp.component';
import { WilInternsComponent } from './wil_co/wil-interns/wil-interns.component';
import { WilTopnavComponent } from './wil_co/wil-topnav/wil-topnav.component';
import { InternActivitiesComponent } from './wil_co/intern-activities/intern-activities.component';
import { StudentActivitiesComponent } from './wil_co/student-activities/student-activities.component';
import { WilAssessmentsComponent } from './wil_co/wil-assessments/wil-assessments.component';
import { WilCoReportComponent } from './wil_co/wil-co-report/wil-co-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegulationsComponent,
    
    InternlifeComponent,
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
    
    PlacementLetterComponent,
    ReAdmissionComponent,
    DeclarationComponent,
    SuccessRespondComponent,
    RegistrationDataComponent,
    
    PracticeComponent,
          ReAdmissionFormComponent,
          SystemDocumentationComponent,
          NavbarComponent,
          SysDocSubmittedComponent,
          AdminHomeComponent,
          AdminNavbarComponent,
          ApplicantsComponent,
          AdminViewComponent,
          AdminRejectComponent,
          MentorInvitedComponent,
          WorkPlaceSavedComponent,
          MenteeListComponent,
          MenteeLogsComponent,
          MenteeRatingComponent,
          StudentEvaluationComponent,
          MentorHomeComponent,
          MentorNavbarComponent,
          MentorActivitiesComponent,
          MentorNotificationComponent,
          MentorInvitesComponent,
          MentorLoginComponent,
          SubmittedEvaluationComponent,
          SubmittedQueryComponent,
          WilHomeComponent,
          WilActivitiesComponent,
          WilRegulationsComponent,
          WilSystemSuppComponent,
          WilInternsComponent,
          WilTopnavComponent,
          InternActivitiesComponent,
          StudentActivitiesComponent,
          WilAssessmentsComponent,
          WilCoReportComponent,
          
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Add AppRoutingModule here
    RouterModule,
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