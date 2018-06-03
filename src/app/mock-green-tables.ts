<<<<<<< Updated upstream:src/app/mock-green-tables.ts
// data file for initial green tables.
// todo: make it typescript
export default 
    [
        {
            name: "Swanton Berry Farm",
            description: "Pick some strawberries or buy a pie!",
            address: "640 CA-1, Pescadero, CA 94060",
=======


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreenTableService {
  data: {name: string, description: string, address: string, lat: number, lng: number}[];
  constructor() {
    this.data =
      [
        {
            name: 'Swantiful Berry Farm',
            description: 'Pick some schnawzberries!',
            address: '640 CA-1, Pescadero, CA 94060',
>>>>>>> Stashed changes:src/app/green-table/green-table.service.ts
            lat: 37.117103,
            lng: -122.303872,
        },
        {
<<<<<<< Updated upstream:src/app/mock-green-tables.ts
            name: "HOME",
            description: "Charming, cozy cafe with a homey atmosphere serving New American plates that skew local.",
            address: "3101 N Main St, Soquel, CA 95073",
=======
            name: 'HOMEY Kitchen',
            description: 'Charming, cozy cafe with a homey atmosphere serving New American plates that skew local.',
            address: '3101 N Main St, Soquel, CA 95073',
>>>>>>> Stashed changes:src/app/green-table/green-table.service.ts
            lat: 36.989647,
            lng: -121.954989
        },
        {
            name: 'Green Tables',
            description: 'Where farm to table and tech have a party!',
            address: '877 Cedar St #150, Santa Cruz, CA 95060',
            lat:  36.968152,
            lng:  -122.025850
<<<<<<< Updated upstream:src/app/mock-green-tables.ts
            
        }
        
    ]
=======
        }
      ];
  }

  getAllCoordinates() {
    const coords = this.data.map( (gt) => { const {lat, lng} = gt; return {lat, lng}; });
    return coords;
  }

  getPlace(id: number) {
    return this.data[id];
  }

}
>>>>>>> Stashed changes:src/app/green-table/green-table.service.ts
