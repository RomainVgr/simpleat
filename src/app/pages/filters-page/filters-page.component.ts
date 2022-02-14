import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBackService } from 'src/app/services/api-back.service';

@Component({
  selector: 'app-filters-page',
  templateUrl: './filters-page.component.html',
  styleUrls: ['./filters-page.component.scss']
})
export class FiltersPageComponent implements OnInit {

  minDistance : any;
  maxDistance : any;

  minPrice : any;
  maxPrice: any;
  selectPrice : any;
  selectDistance : any;
  selectPmr :any;
  selectSurPlace : any;
  selectEmporter : any;

  @Output() stateNumber = new EventEmitter();
  @Output() rangeNumber = new EventEmitter();
  selectRating: number;

  listRestau: string[];


  constructor(private apiBackService : ApiBackService, private route : Router) {

    this.minDistance = 0;
    this.maxDistance = 4;
    this.selectDistance = null;

    this.minPrice = 0;
    this.maxPrice = 20;
    this.selectPrice = null;

    this.selectPmr = false;
    this.selectEmporter = false;
    this.selectSurPlace = false;
  
    this.selectRating = 0;

    this.listRestau = [];

  }

  ngOnInit(): void {
      this.apiBackService.getRestaurants().subscribe((restaurants: any[]) => {
        this.listRestau = restaurants;
        console.log(this.listRestau);
    });
  }


changeValueDistance(valueDistance: any){
  this.selectDistance = valueDistance.target.value;
}

changeValuePrice(valuePrice: any){
  this.selectPrice = valuePrice.target.value;
}

changeValuePMR(valuePmr : any){
this.selectPmr = (valuePmr.target.checked);
}

changeValueSurPlace(valuePlace : any){
  this.selectSurPlace = valuePlace.target.checked;
}

changeValueEmporter(valueEmporter : any){
  this.selectEmporter = valueEmporter.target.checked;
}

onStateNumberChange(stateNumber: number): void {
  this.selectRating = stateNumber;
}

onSendRating():void {
  this.stateNumber.emit(this.selectRating);
}
onSendFilters(){
  

  console.log("distance : " + this.selectDistance);
  console.log("prix : " +this.selectPrice);
  console.log("sur Place : " +this.selectSurPlace);
  console.log("A Emporter : " +this.selectEmporter);
  console.log("Acces PMR : " +this.selectPmr);
  console.log("Avis : " +this.selectRating);
  console.log()


}

}

