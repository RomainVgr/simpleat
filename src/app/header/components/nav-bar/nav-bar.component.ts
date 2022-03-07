import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  private tokenKey: string;


  constructor( private tokenService : TokenService,  public route: Router) {

    this.tokenKey = environment.tokenKey;
   }

  ngOnInit(): void {
  }

  onCloseSession() : void {
this.tokenService.destroyToken(this.tokenKey);
this.route.navigate(['signin']);
  }


}
