import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { car } from './car-list/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiurl = "http://localhost:5023/car"
  constructor(private http: HttpClient) {}
  getAllCars(): Observable<car[]> {
    return this.http.get<car[]>(this.apiurl);
   }
}
