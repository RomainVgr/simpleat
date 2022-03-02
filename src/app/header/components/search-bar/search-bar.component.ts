import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/pages/models/restaurant';
import { RestoPageComponent } from 'src/app/pages/resto-page/resto-page.component';
import { ApiBackService } from 'src/app/services/api-back.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  listRestau: any[];
  restauByName: any[];
  @Output() resultSearch = new EventEmitter<Restaurant[]>();

  constructor(private apiBackService: ApiBackService,
    private route: Router,
    private activatedRoute : ActivatedRoute) {

    this.listRestau = [];
    this.restauByName = [];
  }

  ngOnInit(): void {
    this.apiBackService.getRestaurants().subscribe((restaurants: any[]) => {
      this.listRestau = restaurants;
    });

  }

  onChangeInput(search: string) {

      this.restauByName = this.listRestau;

      this.restauByName = this.restauByName.filter((restau: any) =>
        restau.nom.toLowerCase().includes(search.toLowerCase()));

        // Composant search-bar utilisé dans la page admin
      if(this.activatedRoute.snapshot.routeConfig?.path === "admin"){

        this.resultSearch.emit(this.restauByName);

      }else{ // la search bar utilisée dans la nav-bar pour trouver un restau

      this.apiBackService.setListRestau(this.restauByName, "filtres");
      //this.route.routeReuseStrategy.shouldReuseRoute= () => false;
      // this.route.onSameUrlNavigation = 'reload';
      this.route.navigate(['restaurants']);
      }
    }
  }
