import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiBackService } from 'src/app/services/api-back.service';

@Component({
  selector: 'app-filters-page',
  templateUrl: './filters-page.component.html',
  styleUrls: ['./filters-page.component.scss']
})
export class FiltersPageComponent implements OnInit {

  public minDistance: any;
  public maxDistance: any;

  public minPrice: any;
  public maxPrice: any;
  public selectPrice: any;
  public selectDistance: any;
  public selectPmr: any;
  public selectSurPlace: any;
  public selectEmporter: any;
  public selectRating: number;




  public listRestau: any[];


  constructor(private apiBackService: ApiBackService, private route: Router, private activatedRoute: ActivatedRoute) {

    this.minDistance = 0;
    this.maxDistance = 4000;

    this.minPrice = 1;
    this.maxPrice = 4;

    this.selectPrice = null;
    this.selectDistance = null;
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


  OnChangeValueDistance(valueDistance: any) {
    this.selectDistance = valueDistance.target.value;
  }


  OnChangeValuePrice(valuePrice: any) {
    this.selectPrice = valuePrice.target.value;
  }

  OnChangeValuePMR(valuePmr: any) {
    this.selectPmr = (valuePmr.target.checked);
  }

  OnChangeValueSurPlace(valuePlace: any) {
    this.selectSurPlace = valuePlace.target.checked;
  }

  OnChangeValueEmporter(valueEmporter: any) {
    this.selectEmporter = valueEmporter.target.checked;
  }

  onSendFilters(): void {
    let restaus = this.listRestau;


    // ------------------------------------------------Filtre par Distance-------------------------------------------------------------------------

    if (this.selectDistance != null) {
      restaus = restaus.filter((restau) =>
        this.selectDistance >= Math.round(
          this.apiBackService.setDistance(
          48.86201110271593 , //latitude Simplon
          2.4361804827725417, //longitude Simplon
          restau.latitude,
          restau.longitude)
          ))

    }
    // ------------------------------------------------Filtre par Prix-------------------------------------------------------------------------

    if (this.selectPrice != null) {
      restaus = restaus.filter((restau) =>
        this.selectPrice == restau.prix
      )
    }

    // ------------------------------------------------Filtre par Acces PMR---------------------------------------------------------------------

    if (this.selectPmr === true) {
      restaus = restaus.filter((restau) =>
        this.selectPmr === restau.accesPMR
      )
    }

    // ------------------------------------------------Filtre par A emporter--------------------------------------------------------------------

    if (this.selectEmporter === true) {
      restaus = restaus.filter((restau) =>
        this.selectEmporter === restau.aEmporter
      )
    }

    // ------------------------------------------------Filtre par Sur Place----------------------------------------------------------------------

    if (this.selectSurPlace === true) {
      restaus = restaus.filter((restau) =>
        this.selectSurPlace === restau.surPlace
      )
    }

    // -------------------------------------------------------------------------------------------------------------------------------------------

    this.apiBackService.setListRestau(restaus, this.activatedRoute.snapshot.routeConfig?.path);
    // on fait passer en second parametre le path de la route c'est a dire "filtres"
    this.route.navigate(['restaurants']);

  }
}

