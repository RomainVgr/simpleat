import { Component, OnInit } from '@angular/core';
import { ApiBackService } from 'src/app/services/api-back.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  listCategories : string[];

  constructor(private apiBackService : ApiBackService) {
    this.listCategories = [];
   }

  ngOnInit(): void {
    this.apiBackService.getCategories().subscribe((listCategories: any[]) => {
      console.log(listCategories);

      // const listCategoriesLibelle = listCategories.map(
      //   (category) => category.libelle
      // );

      this.listCategories = listCategories;

    });
    console.log(this.apiBackService);
    
    

  }

}
