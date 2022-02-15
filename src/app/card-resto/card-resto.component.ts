import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-resto',
  templateUrl: './card-resto.component.html',
  styleUrls: ['./card-resto.component.scss']
})
export class CardRestoComponent implements OnInit {

  @Input() restaurant : any ; 
  distance : number;
  
  constructor() {
    this.distance = 0 ;
   }

  ngOnInit(): void {

    console.log(this.restaurant);

    this.distance = Math.round(
      this.getDistanceFromLatLonInKm(
      48.86201110271593 , //latitude Simplon
      2.4361804827725417, //longitude Simplon
      this.restaurant.latitude,
      this.restaurant.longitude)
      );

    console.log(this.distance);
      
    
  }

  getDistanceFromLatLonInKm(lat1 : number , lon1 : number, lat2 : number, lon2 : number) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c * 1000; // Distance in meters
    return d;
  }
  
  deg2rad(deg : number) {
    return deg * (Math.PI/180)
  }



}
