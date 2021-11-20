import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StarterRoutes } from './initial-routing.module';
import { InitialComponent } from './initial.component';
import { DemoMaterialModule } from 'src/app/demo-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, DemoMaterialModule,
    RouterModule.forChild(StarterRoutes)
  ],
  declarations: [
    InitialComponent
  ]
})
export class InitialModule {}