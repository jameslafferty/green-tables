

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
            name: 'Birdsong Orchards',
            description: 'Birds sing and trees grow, come enjoyt',
            address: '613 Lakeview Rd, Watsonville, CA',
            lat: 36.941172,
            lng: -121.724964,
        },
        {
            name: 'Kinderwood Farms',
            description: 'Charming, cozy.',
            address: '730 Cathedral dr, Aptos CA',
            lat: 36.988100,
            lng: -121.897339
        },
        {
            name: 'Green Tables',
            description: 'Where farm to table and tech have a party!',
            address: '877 Cedar St #150, Santa Cruz, CA 95060',
            lat:  36.968152,
            lng:  -122.025850
        },
        {
          name: 'Terra Prana',
          description: 'Land of the Prana',
          address: '550 Larcen Rd. Aptos, CA 95003',
          lat:  37.018737,
          lng:  -121.891385
        },
        {
          name: 'Laurel Canyon',
          description: 'Canyon of the Laurel',
          address: '3243 Old San Jose Rd. Soquel, CA 95073',
          lat:  37.029350,
          lng:  -121.948948
        },
        {
          name: 'Sol Farm',
          description: 'A great place for great things.',
          address: '10 Elena Dr. La Selva Beach, CA 95076',
          lat:  36.938220,
          lng:  -121.855928
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
