import { Component, OnInit } from '@angular/core';
import { ApiBackService } from 'src/app/services/api-back.service';


@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {

  constructor(private apiBackService : ApiBackService) {
   }

  ngOnInit(): void {}
}
