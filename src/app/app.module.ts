import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfacesService } from './classes/interfaces';
import { DemoMaterialModule } from './demo-material.module';
import { FullComponent } from './layouts/full.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SpinnerComponent } from './shared/spinner.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ServiciosComponent } from './views/servicios/servicios.component';
import { PortafolioComponent } from './views/portafolio/portafolio.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { CountersComponent } from './views/homeViews/counters/counters.component';
import { ServicesPrincipalesComponent } from './views/homeViews/services-principales/services-principales.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    MainNavComponent,
    SpinnerComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    PortafolioComponent,
    ContactoComponent,
    CountersComponent,
    ServicesPrincipalesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes, { scrollPositionRestoration: 'enabled' }),
    FormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [
    /* { provide: LocationStrategy, useClass: HashLocationStrategy }, */
    InterfacesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
