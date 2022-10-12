import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bike } from './bike'
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BikeDataService {
  url: string ="http://localhost:3000/bikes";

  getBikes(): Observable<Bike[]>{
    return this.http.get<Bike[]>(this.url);
  }

  getBike(id: number): Observable<Bike> {
    return this.http.get<Bike>(this.url + "/" + id);
  }

  addBike(bike: Bike): Observable<Bike> {
    return this.http.post<Bike>(this.url, bike);
  }

  deleteBike(id: number): Observable<Bike> {
    return this.http.delete<Bike>(this.url + "/" + id);
  }

  editBike(bike: Bike): Observable<Bike> {
    return this.http.put<Bike>(this.url + "/" + bike.id, bike);
  }

  constructor(private http: HttpClient) { }
}
