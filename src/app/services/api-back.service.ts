import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiBackService {
  
  constructor(private httpClient: HttpClient) { }

  getRestaurants(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/restaurants`);
  }

  getCategories(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${environment.apiUrl}/types`);
  }



}
