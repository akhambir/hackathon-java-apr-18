import {User} from '../model/user';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  public login(user: User): Observable<User> {
    return this.http.post<User>(
      'http://localhost:8080/user', user
    );
  }
}
