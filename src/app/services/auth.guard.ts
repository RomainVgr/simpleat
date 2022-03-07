import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import { ApiBackService } from './api-back.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private tokenKey: string;

  constructor(private router: Router, private tokenService : TokenService){
    this.tokenKey = environment.tokenKey;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      const token = localStorage.getItem(this.tokenKey);
      
      if(token) {
        const decodedToken = jwt_decode<any>(token);

        // TODO boucle sur le ['auth'] pour controler le role et en fonction de ca renvoyer true ou false ac redirection page403
        
        
        console.log('decodedToken : ', decodedToken);
        
        if(decodedToken.exp) {
          console.log('Date d\'exp decodedToken : ', decodedToken.exp);
          const dateExp = new Date(decodedToken.exp * 1000);
          if(new Date() >= dateExp) {
            // le token a expiré, je n'autorise pas l'accès
            this.tokenService.destroyToken(this.tokenKey);
            this.router.navigate(['signin']);
            return false;
          }
        }
        
        console.log("C'est ok ! ")
        return true;
      } else {
        console.log("You shall not pass !!!!")
        this.router.navigate(['signin']); // redirection de notre utilisateur vers une url de notre application (dans notre code TS)
        return false;
      }
  }
  
}
