import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';

import { CommonLocalModule } from 'src/app/_modules';

import { PublicComponent } from './public.component';
import { TableCustomerComponent } from 'src/app/_components/public';

@NgModule({
  declarations: [
    PublicComponent,
    TableCustomerComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,

    CommonLocalModule
  ]
})
export class PublicModule { }
