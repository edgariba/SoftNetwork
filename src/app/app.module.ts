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
import { AuthGuard } from './guards/auth.guard';
import { FullComponent } from './layouts/full.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CommonAlertsService } from './services/common/common-alerts.service';
import { CommonService } from './services/common/common.service';



@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CommonService,
    CommonAlertsService,
    InterfacesService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
