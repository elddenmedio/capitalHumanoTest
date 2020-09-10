import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

import { CommonLocalModule } from 'src/app/_modules';

@NgModule({
  declarations: [PublicComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,

    CommonLocalModule
  ]
})
export class PublicModule { }
