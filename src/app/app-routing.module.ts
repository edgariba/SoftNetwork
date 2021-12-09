import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { DesarrolloComponent } from './views/desarrollo/desarrollo.component';
import { HomeComponent } from './views/home/home.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { PortafolioComponent } from './views/portafolio/portafolio.component';
import { TelecomunicacionesComponent } from './views/telecomunicaciones/telecomunicaciones.component';

export const AppRoutes: Routes = [{
  path: '',
  component: FullComponent,
  children: [
    {
      path: '',
      redirectTo: '/',
      pathMatch: 'full'
    },
    { path: 'nosotros', component: NosotrosComponent },
    {
      path: 'soluciones',
      children: [
        {
          path: '',
          redirectTo: 'desarrollo',
          pathMatch: 'full'
        },
        { path: 'desarrollo', component: DesarrolloComponent },
        { path: 'telecomunicaciones', component: TelecomunicacionesComponent }
      ]
    },
    { path: 'portafolio', component: PortafolioComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '', component: HomeComponent },
  ]
}];


