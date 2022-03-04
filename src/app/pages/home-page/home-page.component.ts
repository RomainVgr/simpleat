import { Component, OnInit } from '@angular/core';
import { ApiBackService } from 'src/app/services/api-back.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public userName : any;

  constructor(private apiBackService : ApiBackService, private tokenService : TokenService) {
    
   }

  ngOnInit(): void {
      
    this.apiBackService.getPersonneById(this.tokenService.getCurrentUserId()).subscribe(
      user =>{

        this.userName = user.prenom;
        


  })
}

  onEventLike(isLiked : boolean) {
    this.apiBackService.restoLiked$.next(isLiked);
  }

}
