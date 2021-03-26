import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car, Comment} from '../generatedResource';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getCommentByCar(car: Car): Observable<Comment[]> {
    return this.http.post<Comment[]>(environment.baseUrl + 'comment/getComments', car);
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(environment.baseUrl + 'comment/addComment', comment);
  }
}
