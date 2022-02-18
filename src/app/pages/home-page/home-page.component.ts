import { Component, OnInit } from '@angular/core';
import { ApiBackService } from 'src/app/services/api-back.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  constructor(private apiBackService : ApiBackService) {
    
   }

  ngOnInit(): void {
      

  }
  onEventLike(isLiked : boolean) {
    this.apiBackService.restoLiked$.next(isLiked);
  }

}
