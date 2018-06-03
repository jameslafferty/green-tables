
import { Component, OnInit } from '@angular/core'
import { Routes, Router, NavigationEnd } from '@angular/router'
import {GreenTableService} from '../green-table/green-table.service'

@Component({
  selector: 'gt-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss'],
})

export class MapComponent implements OnInit {
  greenTablesPos: any; 
  title: string = 'Green Tables';
  lat: number = 36.968152; // Cruzio
  lng: number = -122.025850;
  isDetailView: boolean = false;

  constructor(private router: Router, public greenTableService: GreenTableService) { 
    this.greenTablesPos = greenTableService.getAllCoordinates()
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

  ngOnInit(){
    //called after the constructor and called  after the first ngOnChanges()
    
  }

}