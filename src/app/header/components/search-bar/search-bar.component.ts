import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBackService } from 'src/app/services/api-back.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchText = new EventEmitter();
  listRestau: any[];
  restauByName: any[];

  constructor(private apiBackService: ApiBackService, private route: Router) {

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
      console.log(this.restauByName);

      this.apiBackService.setListRestau(this.restauByName, "filtres");
      this.route.navigate(['restaurants']);
    }
  }

