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
        
    // arrivée sur la restau-page depuis filtres ou home(catégories) : appel a une méthode différente du service
    if(this.apiBackService.routeParam === "filtres"){
      this.listRestaurants = this.apiBackService.restoFilter;

    }else if(this.apiBackService.routeParam === "home"){
    this.apiBackService.restoByCat.subscribe((restaurants: any[]) => {
      this.listRestaurants = restaurants;
    });
    }else{ // si on arrive sur l'url /restaurants directement = tous les restau affichés
      
    this.apiBackService.getRestaurants().subscribe((restaurants: any[]) => {
      this.listRestaurants = restaurants;

    })
    }
    

    
  }

}
