import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map.component';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { AppRoutingModule } from '../app-routing.module';
import { GreenTableComponent } from '../green-table/green-table.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBO8qAEgKfV6znHBbtMoD3SCIYnUdHaYd8'
    }),
    AppRoutingModule
  ],
  providers: [],
  declarations: [ MapComponent, GreenTableComponent],
  bootstrap: [ MapComponent ]
})
export class AppModule {}
