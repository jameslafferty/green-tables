
import { Component, OnInit } from '@angular/core'
import { Routes, Router } from '@angular/router'
import GreenTables from '../mock-green-tables'

@Component({
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss'],
})

export class MapComponent implements OnInit {
  greenTables = GreenTables
  title: string = 'Green Tables';
  lat: number = 36.968152; // Cruzio
  lng: number = -122.025850;
  constructor(private router: Router) { }
  
  redirect(GT) {
    console.log(GT)
    this.router.navigate(['./GreenTable']);
  }

  ngOnInit(){
    //called after the constructor and called  after the first ngOnChanges() 
  }

}