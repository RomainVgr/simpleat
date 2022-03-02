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
  tokenKey = environment.tokenKey;

  constructor( private tokenService : TokenService,  public route: Router) { }

  ngOnInit(): void {
  }

  onCloseSession() : void {
this.tokenService.destroyToken();
this.route.navigate(['signin']);
  }


}
