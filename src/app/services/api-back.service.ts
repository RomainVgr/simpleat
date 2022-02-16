import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiBackService {
  
  public restoByCat : Observable<any[]> = of([]);
  public restoFilter : any[];
  public routeParam ?: string;

  constructor(private httpClient: HttpClient) { 
    this.restoFilter = [];
    this.routeParam = "";
  }

  getRestaurants(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/restaurants`);
  }

  getRestaurantsByCateg(id : number, routeParam ?: string ): void {
    this.restoByCat = this.httpClient.get<any[]>(`${environment.apiUrl}/restaurantbytype/${id}`);
    this.routeParam = routeParam;
  }

  getCategories(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${environment.apiUrl}/types`);
  }

  setListRestau(listRestau : any[], routeParam ?: string ) : void{

    this.restoFilter =  listRestau;
    this.routeParam = routeParam;
    
  }

}
