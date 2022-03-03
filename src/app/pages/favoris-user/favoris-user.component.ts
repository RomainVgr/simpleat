import { Component, OnInit } from '@angular/core';
import { ApiBackService } from 'src/app/services/api-back.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-favoris-user',
  templateUrl: './favoris-user.component.html',
  styleUrls: ['./favoris-user.component.scss']
})
export class FavorisUserComponent implements OnInit {


  personneConnectee : any;
  listPref: any;
  restaurantData : any[];

  constructor(private apiBackService : ApiBackService, private tokenService : TokenService) { 

this.restaurantData = []
  }

  ngOnInit(): void {


    this.apiBackService.getPersonneById(this.tokenService.getCurrentUserId()).subscribe(
      user =>{

        this.listPref = user.preference;
         console.log(this.listPref);

         for (let i = 0; i < this.listPref.length; i++) {
         this.restaurantData.push(this.listPref[i]['preferencePK']['restau']);
        }

      }
    );
  }
}