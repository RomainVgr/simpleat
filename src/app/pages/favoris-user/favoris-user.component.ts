import { Component, OnInit } from '@angular/core';
import { ApiBackService } from 'src/app/services/api-back.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-favoris-user',
  templateUrl: './favoris-user.component.html',
  styleUrls: ['./favoris-user.component.scss']
})
export class FavorisUserComponent implements OnInit {

  constructor(private plantouneService: ApiBackService, private tokenService: TokenService) { }

  ngOnInit(): void {
  }

}
