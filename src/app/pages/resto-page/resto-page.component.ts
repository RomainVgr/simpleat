import { Component, OnInit } from '@angular/core';
import { ApiBackService } from 'src/app/services/api-back.service';

@Component({
  selector: 'app-resto-page',
  templateUrl: './resto-page.component.html',
  styleUrls: ['./resto-page.component.scss']
})
export class RestoPageComponent implements OnInit {

  public listRestaurants : any[];

  constructor(private apiBackService : ApiBackService) { 
    this.listRestaurants = [];
  }

  ngOnInit(): void {
        
    this.apiBackService.restoByCat.subscribe((restaurants: any[]) => {

      this.listRestaurants = restaurants;
      

    });
  }

}
