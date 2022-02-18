import { Component,EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ApiBackService } from '../services/api-back.service';

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
  
  constructor(private apiBackService : ApiBackService) {
    this.distance = 0 ;
   }

  ngOnInit(): void {

    console.log(this.restaurant);

    this.distance = Math.round(
      this.apiBackService.setDistance(
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




}
