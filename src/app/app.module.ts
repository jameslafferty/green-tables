import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { GreenTableComponent } from './green-table/green-table.component';
import { AppComponent } from './app.component';

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
  declarations: [ AppComponent, MapComponent, GreenTableComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
