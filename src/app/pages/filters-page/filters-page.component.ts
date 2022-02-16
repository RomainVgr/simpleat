import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
 public selectPrice : number;
 public selectDistance : any;
 public selectPmr :any;
 public selectSurPlace : any;
 public selectEmporter : any;

  @Output() stateNumber = new EventEmitter();
  @Output() rangeNumber = new EventEmitter();
  public selectRating: number;

  public listRestau: any[];


  constructor(private apiBackService : ApiBackService, private route : Router, private activatedRoute : ActivatedRoute) {

    this.minDistance = 0;
    this.maxDistance = 4;
    this.selectDistance = null;

    this.minPrice = 1;
    this.maxPrice = 4;
    this.selectPrice = 0;

    this.selectPmr = false;
    this.selectEmporter = false;
    this.selectSurPlace = false;
  
    this.selectRating = 0;

    this.listRestau = [];
    

  }

  ngOnInit(): void {
      this.apiBackService.getRestaurants().subscribe((restaurants: any[]) => {
        this.listRestau = restaurants;
    });

    console.log(this.listRestau);
    
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


onSendFilters() : void{
  let restaus = this.listRestau;

  restaus = restaus.filter((restau)=>

    this.selectPrice == restau.prix

  ), 
  console.log( this.activatedRoute.snapshot.routeConfig?.path);
  

  this.apiBackService.setListRestau(restaus, this.activatedRoute.snapshot.routeConfig?.path);
    // on fait passer en second parametre le path de la route c'est a dire "filtres"
  
  this.route.navigate(['restaurants']);
  
}

}

