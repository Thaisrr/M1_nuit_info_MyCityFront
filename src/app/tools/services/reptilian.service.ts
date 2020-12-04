import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL} from '../constantes/Leak';
import {User} from '../classes/User';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {httpOptions} from '../constantes/httpOptions';

// User Service
@Injectable({
  providedIn: 'root'
})
export class ReptilianService {

  url = API_URL + '/user';

    constructor(
      private http: HttpClient,
   //   private storage: Storage
    ) { }

  post(user: User ): Observable<any> {
    return this.http.post(this.url, user, );
  }

  login(email: string, password: string) {

    return this.http.post<any>(`${this.url}/login`, {
      email: email,
      mdp: password })
      .pipe(map(i_user => {
        return i_user;
      }));
  }
/*
  logout() {
    //this.storage.set('currentUser', null).then(_ => console.log('user disconnected !'));
  }
*/
  delete(user: User | number): Observable<any> {
    const id = typeof user === 'number' ? user : user.utilisateur_id;
    return this.http.delete(this.url + '/' + id, httpOptions);
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(this.url, {
      params: {
        id: id.toString()
      }
    });
  }
/*
  getCurrent(): Promise<User> {
    return this.storage.get('currentUser');
  }
*/
  update(user: User): Observable<any> {
    return this.http.put(this.url, user, httpOptions)
      .pipe(
       // tap(_ => this.storage.set('currentUser', user))
      );
  }
}
