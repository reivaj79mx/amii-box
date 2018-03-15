import { Injectable, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { flatMap, map } from 'rxjs/operators';

import { Amiibo } from '../models/amiibo.model';

@Injectable()
export class AmiiboService {

  constructor(private http: HttpClient) { }

  getAmiibos(): Observable<Amiibo> {
    return this.http.get<Amiibo[]>('api/amiibo/get')
      .pipe(
        flatMap(amiibo => amiibo)
      );
  }

  setOwn(id: string) {
    return this.http.put('api/amiibo/set_own/' + id, { })
      .pipe();
  }

  getSeries(): Observable<string> {
    return this.http.get<string[]>('api/amiibo/get_series', { })
      .pipe(
        flatMap(serie => serie)
      );
  }

  addAmiibo(data: FormData): Observable<any> {
    return this.http.post('api/amiibo/add_amiibo', data);
  }
}
