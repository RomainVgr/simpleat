import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ApiBackService } from 'src/app/services/api-back.service';
import { TokenService } from 'src/app/services/token.service';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-resto-page',
  templateUrl: './resto-page.component.html',
  styleUrls: ['./resto-page.component.scss']
})
export class RestoPageComponent implements OnInit {

  public listRestaurants : any;
  public listPref : any;
  public restaurantPref : any;
  public beforeRoute ?: string ;

  constructor(private apiBackService : ApiBackService,
              private tokenService : TokenService) { 
    this.listRestaurants = [];
    this.restaurantPref = [];
    this.beforeRoute = this.apiBackService.routeParam;
  }

  ngOnInit(): void {

    this.restauLiked();
        
    // // arrivée sur la restau-page depuis filtres ou home(catégories) : appel a une méthode différente du service
    // if(this.apiBackService.routeParam === "filtres"){
    //   this.listRestaurants = this.apiBackService.restoFilter;

    // }else if(this.apiBackService.routeParam === "categories"){
    // this.apiBackService.restoByCat.subscribe((restaurants: any[]) => {
    //   this.listRestaurants = restaurants;
    // });
    // }else{ // si on arrive sur l'url /restaurants directement = tous les restau affichés
      

    //   this.restauLiked();

    // }
    
  }

  onEventLike(){
      this.apiBackService.restoLiked$.next(true);
      console.log(this.apiBackService.restoLiked$);
      
  }

  saveRestauList(event : any){
    console.log(event);
    this.listRestaurants = event;
  }

  
  restauLiked(){

    forkJoin({
      restaurants: this.apiBackService.getRestaurants(),
      user: this.apiBackService.getPersonneById(this.tokenService.getCurrentUserId()),
      restauByCat : this.apiBackService.restoByCat
    }).subscribe(({restaurants, user, restauByCat}) => {


      if(this.beforeRoute === "filtres"){
        this.listRestaurants = this.apiBackService.restoFilter;
      }else if(this.beforeRoute === "categories" ){
          this.listRestaurants = restauByCat
        }else{
          this.listRestaurants = restaurants;
        }

        this.listPref = user.preference;

         for (let i = 0; i < this.listPref.length; i++) {
         this.restaurantPref.push(this.listPref[i]['preferencePK']['restau']);
        }

        const listRestauIdLike = this.restaurantPref.map((x: any) => x.id);  

        this.listRestaurants.forEach((restau: any) =>  {
          
          
          if(listRestauIdLike.includes(restau.id))
          
          //console.log(restau);
            restau.restauLike = true;
        });

      }
    );


  }

}
