import { EventEmitter, Injectable, Input } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Restaurant } from '../pages/models/restaurant';
import { User } from '../pages/models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiBackService {

  public restoByCat: Observable<any[]> = of([]);
  restoLiked$ = new Subject<any>();
  public restoFilter: any[];
  public routeParam?: string;
  @Input() restaurant: any;
  public restauAModif = new EventEmitter<Restaurant>();

  constructor(private httpClient: HttpClient) {
    this.restoFilter = [];
    this.routeParam = "";
  }

  getRestaurants(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/restaurants`);
  }

  getRestaurantsByCateg(id: number, routeParam?: string): void {
    this.restoByCat = this.httpClient.get<any[]>(`${environment.apiUrl}/restaurantbytype/${id}`);
    this.routeParam = routeParam;
  }

  getCategories(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/types`);
  }

  setListRestau(listRestau: any[], routeParam?: string): void {
    this.restoFilter = listRestau;
    this.routeParam = routeParam;

  }

  setDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    let R = 6371; // Radius of the earth in km
    let dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
    let dLon = this.deg2rad(lon2 - lon1);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c * 1000; // Distance in meters
    return d;
  }

  deg2rad(deg: number) {
    return deg * (Math.PI / 180)
  }

  addRestaurant(newRestau: Restaurant): Observable<any> {
    return this.httpClient.post<any[]>(`${environment.apiUrl}/add-restaurant`, newRestau);
  }

  modifRestaurant(restau : Restaurant): Observable<any>{
    return this.httpClient.put<any[]>(`${environment.apiUrl}/update-restaurant/${restau.id}`, restau);
  }

  deleteRestau(idRestau: number | undefined): Observable<any> {
    return this.httpClient.delete<Restaurant>(`${environment.apiUrl}/delete-restaurant/${idRestau}`);
  }

  getPersonneById(id: any) {
    return this.httpClient.get<User>(`${environment.apiUrl}/user/${id}`);
  }


  public idRestauAModifier(restau:Restaurant): void {
   
    this.restauAModif.emit(restau);
 }

  public addPreference(idUser : number|null, idRestau:number|undefined) : Observable<any>{
    return this.httpClient.post<any>(`${environment.apiUrl}/add-preference/${idUser}/${idRestau}`, {});
 }

  deletePreference(idUser : number|null, idRestau:number|undefined): Observable<any> {
    return this.httpClient.delete<any>(`${environment.apiUrl}/delete-preference/${idUser}/${idRestau}`);
  }
}

