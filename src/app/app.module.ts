import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonLocalModule } from './_modules';
import { BottomSheetOverviewExampleSheetComponent } from './_components/generals/bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomSheetOverviewExampleSheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    CommonLocalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
