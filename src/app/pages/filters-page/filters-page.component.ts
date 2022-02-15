import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBackService } from 'src/app/services/api-back.service';

@Component({
  selector: 'app-filters-page',
  templateUrl: './filters-page.component.html',
  styleUrls: ['./filters-page.component.scss']
})
export class FiltersPageComponent implements OnInit {

 public minDistance : any;
 public maxDistance : any;

 public minPrice : any;
 public maxPrice: any;
 public selectPrice : any;
 public selectDistance : any;
 public selectPmr :any;
 public selectSurPlace : any;
 public selectEmporter : any;

  @Output() stateNumber = new EventEmitter();
  @Output() rangeNumber = new EventEmitter();
  public selectRating: number;

  public listRestau: string[];


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


OnChangeValueDistance(valueDistance: any){
  this.selectDistance = valueDistance.target.value;
}

OnChangeValuePrice(valuePrice: any){
  this.selectPrice = valuePrice.target.value;
}

OnChangeValuePMR(valuePmr : any){
this.selectPmr = (valuePmr.target.checked);
}

OnChangeValueSurPlace(valuePlace : any){
  this.selectSurPlace = valuePlace.target.checked;
}

OnChangeValueEmporter(valueEmporter : any){
  this.selectEmporter = valueEmporter.target.checked;
}

onStateNumberChange(stateNumber: number): void {
  this.selectRating = stateNumber;
}

onSendRating() {
  this.stateNumber.emit(this.selectRating);
}


onSendFilters(){
  console.log("Distance :" ,this.selectDistance);
  console.log("Prix :" ,this.selectPrice);
  console.log("Sur Place  :" ,this.selectSurPlace);
  console.log("A emporter :" ,this.selectEmporter);
  console.log("PMR :" ,this.selectPmr);
  console.log("avis :" ,this.selectRating);
}

}

