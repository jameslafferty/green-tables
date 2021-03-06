
import { Component, OnInit } from '@angular/core'
import { Routes, Router } from '@angular/router'

@Component({
  selector: 'gt-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
  title: string = 'Green Tables';
  lat: number = 36.968152;
  lng: number = -122.025850;
  constructor(private router: Router) { }
  redirect() {
    this.router.navigate(['./GreenTable']);
  }
  ngOnInit(){
    //called after the constructor and called  after the first ngOnChanges() 
  }

  click() {
    console.log('hi')
  }

}