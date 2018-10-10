import { Component, ViewChild, ElementRef, NgZone, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { tripPoint, Vehicle } from './vehicle';
import { MapsAPILoader } from '@agm/core';
import { MouseEvent } from '@agm/core';
import { google, Marker } from '@agm/core/services/google-maps-types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  vehicleList: any = [];
  trips: any;
  endLocation :any;
  data: any;
  vehicle;
  // villageName: string;
  lat = 23.444;
  lng = 84.444;

  @ViewChild('search') public searchElement = ElementRef;

  constructor(private dataService: DataService, public http: HttpClient,
    private mapAPILoader: MapsAPILoader, private ngZone: NgZone) {

    this.dataService.getDataFromStore(this.vehicle)   // Subscribe the post method for acess the vlue of Trip dropdown
      .subscribe(vehicle => this.trips = vehicle);
    // console.log(JSON.stringify(this.vehicle));
    console.log("trip" + this.vehicle);
  }

  ngOnInit() {

    this.dataService.getDataFromStore()         // subscribe the method for vehicle
      .subscribe((res: any) => {
        this.vehicleList = res;
        console.log("vehicleList" + res);
      });

    this.dataService.addData()
      .subscribe(villageName => {                      //subscribe the value for villageName
        console.log("villageName" + JSON.stringify(villageName));
      });

      this.dataService.addData()
      .subscribe(result => {                      //subscribe the value for markers from api
        this.endLocation =result;
      });

    /// for AutoComplete search

    // this.mapAPILoader.load().then(
    //   () => {
    //     let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: ['address'] });
    //     autocomplete.addListener("place_changed", () =>
    //       this.ngZone.run(() => {
    //         let place = google.maps.places.PlaceResults = autocomplete.getPlace();
    //         if (place.geometry === 'undefined' || place.geometry === 'null') 
    //           return;
    //        console.log('places'+ place); 
    //       })
    //     )
    //     })

  }

  /////Map
  zoom: number = 5;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: 21.765844,
      lng: 87.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 24.765844,
      lng: 84.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 20.765844,
      lng: 83.895982,
      label: 'C',
      draggable: true
    },
    {
      lat: 22.765844,
      lng: 87.895982,
      label: 'D',
      draggable: true
    },
    {
      lat: 20.765844,
      lng: 87.895982,
      label: 'E',
      draggable: true
    }

  ]
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}


