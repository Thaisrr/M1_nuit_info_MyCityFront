import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Incident} from '../classes/Incident';
import {Observable} from 'rxjs';
import {httpOptions} from '../constantes/httpOptions';
import {tap} from 'rxjs/operators';
import {API_URL} from '../constantes/Leak';
import {Category} from '../classes/Category';

// Incidents services
@Injectable({
  providedIn: 'root'
})
export class NoussachonsService {
  url = API_URL + '/incidents';

  constructor(private http: HttpClient) { }

  post( info: Incident ): Observable<any> {
    return this.http.post(this.url, info, httpOptions );
  }

  delete(info: Incident | number): Observable<any> {
    const id = typeof info === 'number' ? info : info.incident_id;
    return this.http.delete(this.url + '/' + id, httpOptions);
  }

  get(id: number): Observable<Incident> {
    return this.http.get<Incident>(this.url + '/' + id
    );
  }

  getByCategory(cat: Category | number): Observable<Incident[]> {
    const id = typeof cat === 'number' ? cat : cat.category_id;
    return this.http.get<Incident[]>(this.url + '/categorie/' + id);
  }

  getByStatus(status: string): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.url + '/statut/' + status);
  }

  update(info: Incident): Observable<any> {
    return this.http.put(this.url, info, httpOptions);
  }

}
