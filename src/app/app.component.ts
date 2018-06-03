import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'gt-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'Green Tables';
  lat = 36.968152;
  lng = -122.025850;

  constructor(private router: Router) { }
  redirect() {
    this.router.navigate(['./GreenTable']);
  }

  ngOnInit() {}
}
