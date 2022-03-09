import { Component,EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ApiBackService } from '../services/api-back.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-card-resto',
  templateUrl: './card-resto.component.html',
  styleUrls: ['./card-resto.component.scss']
})
export class CardRestoComponent implements OnInit {

  @Input() restaurant : any ; 
  distance : number;
  @Input() likeResto: any; 
  //@Output() clickLike = new EventEmitter<boolean>();
  isLiked : boolean = false;
  priceRef = ["Indisponible","1-10€ ","11-20€","21-30€","31-40€"];
  private userId : number | null;
  
  constructor(private apiBackService : ApiBackService, private tokenService : TokenService) {
    this.distance = 0 ;
    this.userId = 0;
  
   }

  ngOnInit(): void {

    this.userId = this.tokenService.getCurrentUserId();
    this.distance = Math.round(
      this.apiBackService.setDistance(
      48.86201110271593 , //latitude Simplon
      2.4361804827725417, //longitude Simplon
      this.restaurant.latitude,
      this.restaurant.longitude)
      );

      
 
  }
  onClickLike() {
    console.log('click');
    this.restaurant.restauLike = !this.restaurant.restauLike;
    //this.clickLike.emit(this.restaurant.restauLike);
          
    if(this.restaurant.restauLike){
      this.apiBackService.addPreference(this.userId,this.restaurant.id).subscribe();
    }else{
      this.apiBackService.deletePreference(this.userId,this.restaurant.id).subscribe();
    }
  }

}
