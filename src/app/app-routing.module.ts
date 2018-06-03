import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreenTableComponent } from './green-table/green-table.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { path: 'GreenTable', component: GreenTableComponent },
  { path: 'map', component: MapComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
