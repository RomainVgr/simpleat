import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters-page',
  templateUrl: './filters-page.component.html',
  styleUrls: ['./filters-page.component.scss']
})
export class FiltersPageComponent implements OnInit {

  minDistance : any;
  maxDistance : any;
  selectDistance : any;



  minPrice : any;
  maxPrice: any;
  selectPrice : any;

  constructor() {

    this.minDistance = 0;
    this.maxDistance = 4;
    this.selectDistance = 0;

    this.minPrice = 0;
    this.maxPrice = 20;
    this.selectPrice = 0;

   }

  ngOnInit(): void {}

  changeValueDistance(valueDistance: any){
    this.selectDistance = valueDistance.target.value;
    console.log(this.selectDistance);
}


changeValuePrice(valuePrice: any){
  this.selectPrice = valuePrice.target.value;
  console.log(this.selectPrice);
}

}
