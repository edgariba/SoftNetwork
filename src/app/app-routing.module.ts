import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { HomeComponent } from './views/home/home.component';
import { PortafolioComponent } from './views/portafolio/portafolio.component';
import { ServiciosComponent } from './views/servicios/servicios.component';

export const AppRoutes: Routes = [{
  path: '',
  component: FullComponent,
  children: [
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    },
    { path: '', component: HomeComponent },
    { path: 'nosotros', component: HomeComponent },
    { path: 'nosotros', component: HomeComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'portafolio', component: PortafolioComponent },
    { path: 'contacto', component: ContactoComponent },
  ]
}];


