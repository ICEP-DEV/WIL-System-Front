import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { PlacementinfoComponent } from './placementinfo/placementinfo.component';
import { ActivitiesComponent } from './activities/activities.component';
import { SystemSupportComponent } from './system-support/system-support.component';

import { NotificationsComponent } from './notifications/notifications.component';
import { AssessmentsComponent } from './assessments/assessments.component';
import { LogEntriesComponent } from './log-entries/log-entries.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { Ass1Component } from './ass1/ass1.component';
import { Ass2Component } from './ass2/ass2.component';


import { AddmentorComponent } from './addmentor/addmentor.component';
import { ChangementorComponent } from './changementor/changementor.component';
import { AddworkComponent } from './addwork/addwork.component';
import { ChangeworkComponent } from './changework/changework.component';
import { PlacementdetailsComponent } from './placementdetails/placementdetails.component';




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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }