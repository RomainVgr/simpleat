import { Component, OnInit } from '@angular/core';
import { ApiBackService } from 'src/app/services/api-back.service';

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

  constructor(private apiBackService : ApiBackService) {

    this.minDistance = 0;
    this.maxDistance = 4;
    this.selectDistance = 0;

    this.minPrice = 0;
    this.maxPrice = 20;
    this.selectPrice = 0;

   }

  ngOnInit(): void {
    this.apiBackService.getRestaurants().subscribe(resp =>{
      console.log(resp);
      
    })
  }

  changeValueDistance(valueDistance: any){
    this.selectDistance = valueDistance.target.value;
    console.log(this.selectDistance);
}


changeValuePrice(valuePrice: any){
  this.selectPrice = valuePrice.target.value;
  console.log(this.selectPrice);
}

}
