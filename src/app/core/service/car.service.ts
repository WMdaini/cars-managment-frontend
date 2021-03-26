import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Car} from '../generatedResource';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {
  }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(environment.baseUrl + 'car/getAll');
  }
}
