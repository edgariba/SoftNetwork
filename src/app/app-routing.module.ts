import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full.component';

/* const routes: Routes = [
  { path: '', component: InitialComponent},
  { path: 'home', component: HomeComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'categories', component: CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } */

export const AppRoutes: Routes = [{
  path: '',
  component: FullComponent,
  children: [
    {
      path: '',
      redirectTo: '/',
      pathMatch: 'full'
    },
    {
      path: '',
      loadChildren: () => import('./views/initial/initial.module').then(m => m.InitialModule)
    },
    {
      path: '',
      loadChildren:
        () => import('./views/views.module').then(m => m.ViewsModule)
    }
  ]
}];


