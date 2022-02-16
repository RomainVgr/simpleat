import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiBackService } from '../services/api-back.service';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.scss']
})
export class CardCategoryComponent implements OnInit {

  @Input() categoryData : any;
  
  constructor(private apiBackService : ApiBackService, private route : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClickCateg(id : number){

    this.apiBackService.getRestaurantsByCateg(id , this.activatedRoute.snapshot.routeConfig?.path);
    // on fait passer en second parametre le path de la route c'est a dire "home"(pour l'instant)

    this.route.navigate(['restaurants']);
    
  }

}
