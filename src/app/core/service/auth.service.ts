import {Injectable} from '@angular/core';
import {User} from '../generatedResource';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUser: User;

  constructor(private http: HttpClient) {
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(environment.baseUrl + 'auth/login', user);
  }
}
