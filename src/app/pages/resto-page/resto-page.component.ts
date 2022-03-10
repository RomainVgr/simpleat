import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { ApiBackService } from 'src/app/services/api-back.service';
import { TokenService } from 'src/app/services/token.service';
import { Preference } from '../models/preference';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-resto-page',
  templateUrl: './resto-page.component.html',
  styleUrls: ['./resto-page.component.scss']
})
export class RestoPageComponent implements OnInit {

  public listRestaurants: Restaurant[];
  public listPref: any;
  public restaurantPref: any;
  public beforeRoute?: string;
  private userId: number | null;

  constructor(private apiBackService: ApiBackService,
    private tokenService: TokenService) {
    this.listRestaurants = [];
    this.restaurantPref = [];
    this.beforeRoute = this.apiBackService.routeParam;
    this.userId = 0;
  }

  ngOnInit(): void {

    this.restauLiked();

    this.listRestaurants = [];

    this.userId = this.tokenService.getCurrentUserId();

  }

  // onEventLike(liked : any, idRestau : number | undefined){
  //     //this.apiBackService.restoLiked$.next(true);
  //     console.log(this.userId);
  //     console.log(idRestau);

  //     if(liked){
  //       this.apiBackService.addPreference(this.userId,idRestau).subscribe();
  //     }else{
  //       this.apiBackService.deletePreference(this.userId,idRestau).subscribe();
  //     }
  // }

  saveRestauList(event: any) {
    console.log(event);
    this.listRestaurants = event;
  }


  restauLiked() {

    forkJoin({
      restaurants: this.apiBackService.getRestaurants(),
      user: this.apiBackService.getPersonneById(this.tokenService.getCurrentUserId()),
      restauByCat: this.apiBackService.restoByCat
    }).subscribe(({ restaurants, user, restauByCat }) => {

      if (this.beforeRoute === "filtres") {
        this.listRestaurants = this.apiBackService.restoFilter;
        this.apiBackService.restoFilter = restaurants;
      } else if (this.beforeRoute === "categories") {
        this.listRestaurants = restauByCat
        this.apiBackService.restoByCat = of(restaurants);
      } else {
        this.listRestaurants = restaurants;
      }

      this.listPref = user.preference;

      for (let i = 0; i < this.listPref.length; i++) {
        this.restaurantPref.push(this.listPref[i]['preferencePK']['restau']);
      }

      const listRestauIdLike = this.restaurantPref.map((x: any) => x.id);

      this.listRestaurants.forEach((restau: any) => {


        if (listRestauIdLike.includes(restau.id))
          //console.log(restau);
          restau.restauLike = true;
      });

    }
    );


  }

}
