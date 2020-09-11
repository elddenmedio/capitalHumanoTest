import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';

import { CommonLocalModule } from 'src/app/_modules';

import { PublicComponent } from './public.component';
import { TableCustomerComponent } from 'src/app/_components/public';

import { CustomersService } from 'src/app/_services';
import { FormAddCustomerComponent } from './form-add-customer/form-add-customer.component';

@NgModule({
  declarations: [
    PublicComponent,
    TableCustomerComponent,
    FormAddCustomerComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,

    CommonLocalModule
  ],
  providers: [
    CustomersService
  ]
})
export class PublicModule { }
