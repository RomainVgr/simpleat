import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBackService } from '../services/api-back.service';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.scss']
})
export class CardCategoryComponent implements OnInit {

  @Input() categoryData : any;
  
  constructor(private apiBackService : ApiBackService, private route : Router) { }

  ngOnInit(): void {
  }

  onClickCateg(id : number){

    
    this.apiBackService.getRestaurantsByCateg(id);

    this.route.navigate(['restaurants']);

    //console.log('salut les copains');
    
  }

}
