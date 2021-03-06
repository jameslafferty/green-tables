import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {GreenTableService} from './green-table.service'
@Component({
  template:  `
  <div> 
    <h2>{{ name }} </h2>
    <p> {{description}} </p>
  </div>
  `
})
export class GreenTableComponent {
 
  id: number; 
  details: object;
  
  constructor(public greenTableService: GreenTableService, private _Activatedroute:ActivatedRoute) {
    _Activatedroute.params.subscribe(params => { 
      this.id = params['id'];
      this.details =greenTableService.getPlace(this.id);
    });
     
  }
  
   get name():string {
    return this.details["name"]
  }

  get description():string{
    return this.details["description"]
  }

}
