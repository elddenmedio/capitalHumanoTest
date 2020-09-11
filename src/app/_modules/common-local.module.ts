import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MaterialModule } from './material.module';

import { PageNotFoundComponent } from '../_components/generals';

import { TranslateComponentService, StorageLocalService, CloseModalService } from '../_services';

import { MomentLocalPipe } from 'src/app/_pipes';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    MomentLocalPipe
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MaterialModule
  ],
  exports: [
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,

    PageNotFoundComponent,
    MomentLocalPipe
  ],
  providers: [
    TranslateComponentService,
    StorageLocalService,
    CloseModalService
  ]
})
export class CommonLocalModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}