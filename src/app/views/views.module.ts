import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from '../demo-material.module';
import { RegisterDialogComponent } from '../dialogs/register-dialog/register-dialog.component';
import { UploadEvidenceComponent } from '../dialogs/upload-evidence/upload-evidence.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { InitialModule } from './initial/initial.module';
import { RoutesViews } from './views-routing.module';
import { JudgesComponent } from './judges/judges.component';
import { ActivityComponent } from './activity/activity.component';
import { ProfileComponent } from './profile/profile.component';
import { LoadingComponent } from '../loading';
import { GalleryComponent } from './gallery/gallery.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { TeamInfoComponent } from '../components/team-info/team-info.component';
import { ParicipantInfoComponent } from '../components/paricipant-info/paricipant-info.component';
import { CountdownComponent } from '../components/countdown/countdown.component';



@NgModule({
  declarations: [
    RegisterDialogComponent,
    HomeComponent,
    CalendarComponent,
    CategoriesComponent,
    JudgesComponent,
    ActivityComponent,
    ProfileComponent, 
    LoadingComponent,
    UploadEvidenceComponent,
    GalleryComponent,
    LeaderboardComponent,
    ParicipantInfoComponent,
    TeamInfoComponent,
    CountdownComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    DemoMaterialModule,
    CommonModule,
    RouterModule.forChild(RoutesViews)
  ],
  exports: [
    RouterModule, LoadingComponent,
    ParicipantInfoComponent,
    TeamInfoComponent, 
    CountdownComponent
  ]
})
export class ViewsModule { }
