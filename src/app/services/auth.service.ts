import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/pages/models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string;
  private tokenKey: string;

  constructor(private http: HttpClient) {
    // On se sert des variables d'environnement de notre application
    this.apiUrl = environment.apiUrl;
    this.tokenKey = environment.tokenKey;
   }

  //  signup(): Observable<any> {
  //   //  const body = {
  //   //     firstName: firstName,
  //   //     lastName: lastName,
  //   //     email: email,
  //   //     password: password
  //   //  };

  //    console.log("Mon nouvel utilisateur : ", newUser);

  //    return this.http.post(`${this.apiUrl}/register`, newUser);
  //  }

   signin(email: string, password: string): Observable<any> {
     const body = {
       email: email,
       password: password
     };

     console.log("Mon body : ", body);

     // Modifier cette partie ci-dessous :
     // - pour pouvoir stocker dans le localstorage notre accesstoken
     // - Sous la clé "TOKEN-SIMPLEAT"

     return this.http.post(`${this.apiUrl}/signin`, body).pipe(
       map((x: any) => {
        
         console.log('Service : ', x.token);
         // Modification à faire ici
         localStorage.setItem(this.tokenKey, x.token);
         return x; // permet de renvoyer la réponse à l'initiateur (page Signin) après le traitement du map
        })
     );
   }

  //  forgotPassword(email: string, password: string): Observable<any> {
  //    const body = {
  //      email: email,
  //      password: password
  //    };

  //    console.log("Mon body : ", body);

  //    return this.http.post(`${this.apiUrl}/forgot-psw`, body);
  //  }

}
