import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ActivityComponent } from './activity/activity.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CategoriesComponent } from './categories/categories.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { JudgesComponent } from './judges/judges.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ProfileComponent } from './profile/profile.component';

export const RoutesViews: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
  { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard] },
  { path: 'judges', component: JudgesComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard] },
  { path: 'leaderboard', component: LeaderboardComponent, canActivate: [AuthGuard] },
  {
    path: 'categories',
    children: [
      { path: '', component: CategoriesComponent, canActivate: [AuthGuard]},
      { path: 'activity/:hash_activity', component: ActivityComponent, canActivate: [AuthGuard]}
    ]
  },
]