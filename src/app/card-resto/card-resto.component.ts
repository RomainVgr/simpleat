import { Component,EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-resto',
  templateUrl: './card-resto.component.html',
  styleUrls: ['./card-resto.component.scss']
})
export class CardRestoComponent implements OnInit {

  @Input() restaurant : any ; 
  distance : number;
  @Input() likeResto: any; 
  @Output() clickLike = new EventEmitter<boolean>();
  isLiked : boolean = false;
  
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
  onClickLike() {
    console.log('click');
    this.isLiked = !this.isLiked;
    this.clickLike.emit(this.isLiked);
  }

  getDistanceFromLatLonInKm(lat1 : number , lon1 : number, lat2 : number, lon2 : number) {
    let R = 6371; // Radius of the earth in km
    let dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    let dLon = this.deg2rad(lon2-lon1); 
    let a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = R * c * 1000; // Distance in meters
    return d;
  }
  
  deg2rad(deg : number) {
    return deg * (Math.PI/180)
  }



}
