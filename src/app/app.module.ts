import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfacesService } from './classes/interfaces';
import { DemoMaterialModule } from './demo-material.module';
import { FooterComponent } from './footer/footer.component';
import { FullComponent } from './layouts/full.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SpinnerComponent } from './shared/spinner.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { DesarrolloComponent } from './views/desarrollo/desarrollo.component';
import { HomeComponent } from './views/home/home.component';
import { CountersComponent } from './views/homeViews/counters/counters.component';
import { ServicesPrincipalesComponent } from './views/homeViews/services-principales/services-principales.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { PortafolioComponent } from './views/portafolio/portafolio.component';
import { TelecomunicacionesComponent } from './views/telecomunicaciones/telecomunicaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    MainNavComponent,
    SpinnerComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    PortafolioComponent,
    ContactoComponent,
    CountersComponent,
    ServicesPrincipalesComponent,
    TelecomunicacionesComponent,
    DesarrolloComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, scrollPositionRestoration: 'enabled' }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
   /*  {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
   }, */
    InterfacesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
