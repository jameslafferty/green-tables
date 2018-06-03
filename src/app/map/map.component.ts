
import { Component, OnInit } from '@angular/core';
import { Routes, Router, NavigationEnd } from '@angular/router';
import {GreenTableService} from '../green-table/green-table.service';

@Component({
  selector: 'gt-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss'],
})

export class MapComponent implements OnInit {
  greenTablesPos: any;
  title = 'Green Tables';
  lat = 36.968152; // Cruzio
  lng = -122.025850;
  isDetailView = false;

  constructor(private router: Router, public greenTableService: GreenTableService) {
    this.greenTablesPos = greenTableService.getAllCoordinates();
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (e.url.match('GreenTable')) {
          this.isDetailView = true;
          return;
        }
        this.isDetailView = false;
      }
    });
  }

  redirect(id) {
    this.router.navigate([`./GreenTable/${id}`]);
  }

  ngOnInit() {}

}
