import { Component, OnInit } from '@angular/core';
import { ApiBackService } from 'src/app/services/api-back.service';


@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {
  listCategories : string[];

  constructor(private apiBackService : ApiBackService) {
    this.listCategories = [];
   }

  ngOnInit(): void {
    this.apiBackService.getCategories().subscribe((listCategories: any[]) => {
      // console.log(listCategories);

      this.listCategories = listCategories;

    }); 
  }
}
