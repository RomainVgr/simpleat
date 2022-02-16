import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiBackService {
  
  public restoByCat : Observable<any[]> = of([]);
  restoLiked$ = new Subject<any>();

  constructor(private httpClient: HttpClient) { 
  }

  getRestaurants(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/restaurants`);
  }

  getRestaurantsByCateg(id : number): void {
    this.restoByCat = this.httpClient.get<any[]>(`${environment.apiUrl}/restaurantbytype/${id}`);
  }

  getCategories(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${environment.apiUrl}/types`);
  }



}
