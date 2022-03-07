import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/pages/models/user';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string;
  private tokenKey: string;

  constructor(private http: HttpClient, private router: Router) {
    // On se sert des variables d'environnement de notre application
    this.apiUrl = environment.apiUrl;
    this.tokenKey = environment.tokenKey;
   }

   signup(newUser: User): Observable<any> {

      console.log("Mon nouvel utilisateur : ", newUser);
      return this.http.post(`${this.apiUrl}/signup`, newUser);
   }


   signin(email: string, password: string): Observable<any> {
     const body = {
       email: email,
       password: password
     };

     console.log("Mon body : ", body);



     return this.http.post(`${this.apiUrl}/signin`, body).pipe(
       map((x: any) => {
        console.log(x);
        
         console.log('Service : ', x.token);
         // Modification à faire ici
         localStorage.setItem(this.tokenKey, x.token);
         return x; // permet de renvoyer la réponse à l'initiateur (page Signin) après le traitement du map
        })
     );
   }

   getConnectedUserInfo(): Observable<User> | void  {
    const token = localStorage.getItem(this.tokenKey);
    if(token) {
      const decodedToken = jwt_decode<any>(token);
      const userId = decodedToken.userId;
      return this.http.get<User>(`${this.apiUrl}/user/${userId}`);
    } else {
      this.router.navigate(['signin']);
    }
   }

}
