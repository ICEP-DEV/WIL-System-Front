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
///admin
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ApplicantsComponent } from './components/applicants/applicants.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { SubmittedEvaluationComponent } from './components/submitted-evaluation/submitted-evaluation.component';
import { SubmittedQueryComponent } from './components/submitted-query/submitted-query.component';
import { AdminRejectComponent } from './components/admin-reject/admin-reject.component';
import { RegistrarHomeComponent } from './components/registrar-home/registrar-home.component';
import { RegistrarApplicantsComponent } from './components/registrar-applicants/registrar-applicants.component';
import { RegistrarViewComponent } from './components/registrar-view/registrar-view.component';

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

///////////////////////WIL_CO/////////////////////////////////////
import { WilHomeComponent } from './wil_co/wil-home/wil-home.component';
import { WilRegulationsComponent } from './wil_co/wil-regulations/wil-regulations.component';
import { WilInternsComponent } from './wil_co/wil-interns/wil-interns.component';
import { WilActivitiesComponent } from './wil_co/wil-activities/wil-activities.component';
import { WilSystemSuppComponent } from './wil_co/wil-system-supp/wil-system-supp.component';
import { InternActivitiesComponent } from './wil_co/intern-activities/intern-activities.component';
import { StudentActivitiesComponent } from './wil_co/student-activities/student-activities.component';
import { WilAssessmentsComponent } from './wil_co/wil-assessments/wil-assessments.component';
import { WilCoReportComponent } from './wil_co/wil-co-report/wil-co-report.component';




const routes: Routes = [
  //{ path: '', component: RecommendationComponent },
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

  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'recommendation', component:RecommendationComponent},
 
  {path: 'wil-registration',component: WILRegistrationComponent},
  {path: 'ep-information', component: EpInformationComponent},
  {path: 'Internlife', component: HomeComponent},
  {path: 'Submit Evaluation', component: SubmittedEvaluationComponent},
  {path: 'Submit Query', component: SubmittedQueryComponent},
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
  {path: 'mentee_logs', component:MenteeLogsComponent},
  {path: 'mentee_list', component:MenteeListComponent},
  {path: 'mentee_rating', component:MenteeRatingComponent},
  {path: 'student_evaluation', component:StudentEvaluationComponent},
  {path: 'mentor_activities', component:MentorActivitiesComponent},
  {path: 'mentor_notification', component:MentorNotificationComponent},
  {path: 'mentor_invites', component:MentorInvitesComponent},
  {path: 'mentor_login', component:MentorLoginComponent},
//////////////////////////ADMIN////////////////////////////
{path: 'admin-home', component:AdminHomeComponent},
{path: 'applicants', component:ApplicantsComponent},
{path: 'admin-view/:studentNumber', component:AdminViewComponent},  // Add dynamic route parameter
{ path: '', redirectTo: '/applicants', pathMatch: 'full' },
{path: 'admin-reject/:student_no', component:AdminRejectComponent},
{ path: '', redirectTo: '/admin-view', pathMatch: 'full' },
//////////////////////////ADMIN////////////////////////////
{path: 'registrar-home', component:RegistrarHomeComponent},
{path: 'registrar-applicants', component:RegistrarApplicantsComponent},
{path: 'registrar-view/:studentNumber', component:RegistrarViewComponent}, 

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }