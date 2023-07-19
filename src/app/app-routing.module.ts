import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegulationsComponent } from './components/regulations/regulations.component';
import { PlacementinfoComponent } from './components/placementinfo/placementinfo.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { SystemSupportComponent } from './components/system-support/system-support.component';

//
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AssessmentsComponent } from './components/assessments/assessments.component';
import { LogEntriesComponent } from './components/log-entries/log-entries.component';
import { EvaluationsComponent } from './components/evaluations/evaluations.component';
import { Ass1Component } from './components/ass1/ass1.component';
import { Ass2Component } from './components/ass2/ass2.component';

//placement information
import { AddmentorComponent } from './components/addmentor/addmentor.component';
import { ChangementorComponent } from './components/changementor/changementor.component';
import { AddworkComponent } from './components/addwork/addwork.component';
import { ChangeworkComponent } from './components/changework/changework.component';
import { PlacementdetailsComponent } from './components/placementdetails/placementdetails.component';
import { MentorInvitedComponent } from './components/mentor-invited/mentor-invited.component';
import { WorkPlaceSavedComponent } from './components/work-place-saved/work-place-saved.component';
import { UpdateMentorComponent } from './components/update-mentor/update-mentor.component';

//sidenav 
//import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { WILRegistrationComponent } from './components/wil-registration/wil-registration.component';
import { EpInformationComponent } from './components/ep-information/ep-information.component';
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
import { ApplicantsComponent } from './components/applicants/applicants.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
//mentor
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
import { LogApprovedComponent } from './components/log-approved/log-approved.component';
import { LogRejectedComponent } from './components/log-rejected/log-rejected.component';
import { MentorSystemSupportComponent } from './components/mentor-system-support/mentor-system-support.component';






const routes: Routes = [
 
  { path: 'Home', component: HomeComponent },
  { path: 'Regulations', component: RegulationsComponent },
  { path: 'Placement Information', component: PlacementinfoComponent },
  {path: 'Activities',component: ActivitiesComponent},
  {path: 'System Support',component: SystemSupportComponent},
  
  {path: 'Notifications',component: NotificationsComponent},
  {path: 'assessments',component: AssessmentsComponent},
  {path: 'evaluations',component: EvaluationsComponent},
  {path: 'log-entries',component: LogEntriesComponent},
  {path: 'ass1',component: Ass1Component},
  {path: 'ass2',component: Ass2Component},

  {path: 'addmentor',component: AddmentorComponent},
  {path: 'changementor',component: ChangementorComponent},
  {path: 'addwork',component: AddworkComponent},
  {path: 'changework',component: ChangeworkComponent},
  {path: 'placementd',component: PlacementdetailsComponent},
  {path: 'mentor-invited',component:MentorInvitedComponent},
  {path: 'workPlace-saved',component: WorkPlaceSavedComponent},
  {path: 'updateMentor/:mentor_Id/:title/:m_name/:m_surname/:mobileNo/:email_address',component: UpdateMentorComponent},

  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'recommendation', component:RecommendationComponent},
 
  {path: 'wil-registration',component:WILRegistrationComponent},
  {path: 'ep-information', component:EpInformationComponent},
  {path: 'placement-letter', component:PlacementLetterComponent},
  {path: 're-admission', component:ReAdmissionComponent},
  {path: 'declaration', component:DeclarationComponent},
  {path: 'success-respond', component:SuccessRespondComponent},
  {path: 'registration-data', component:RegistrationDataComponent},
  {path: 'Internlife', component: HomeComponent},
  {path: 're-admission-form', component:ReAdmissionFormComponent},
  {path: 'system-documentation', component:SystemDocumentationComponent},
  {path: 'sys-doc-submitted', component:SysDocSubmittedComponent},
  {path: 'navbar', component:NavbarComponent},
  
  //Mentor
  {path: 'mentor_home', component:MentorHomeComponent},
  {path: 'mentor_navbar', component:MentorNavbarComponent},
  {path: 'mentee_logs/:student_no/:name/:surname', component:MenteeLogsComponent},
  {path: 'mentee_list', component:MenteeListComponent},
  {path: 'mentee_rating/:Student_no/:surname/:name/:month', component:MenteeRatingComponent},
  {path: 'student_evaluation', component:StudentEvaluationComponent},
  {path: 'mentor_activities', component:MentorActivitiesComponent},
  {path: 'mentor_notification', component:MentorNotificationComponent},
  {path: 'mentor_invites', component:MentorInvitesComponent},
  {path: 'mentor_login', component:MentorLoginComponent},
  {path: 'log_approved/:Student_no/:surname/:name/:month/:approval', component:LogApprovedComponent},
  {path: 'log_rejected/:Student_no/:surname/:name/:month/:approval', component:LogRejectedComponent},
  {path: 'mentor_systemSupport', component:MentorSystemSupportComponent},
//////////////////////////ADMIN////////////////////////////
{path: 'admin-home', component:AdminHomeComponent},
{path: 'applicants', component:ApplicantsComponent},
{path: 'admin-view/:studentNumber', component:AdminViewComponent},  // Add dynamic route parameter
{ path: '', redirectTo: '/applicants', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }