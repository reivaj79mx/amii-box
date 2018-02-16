import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

import { Amiibo } from '../models/amiibo.model';

@Injectable()
export class AmiiboService {

  constructor(private http: HttpClient) { }

  getAmiibos(): Observable<Amiibo[]> {
    return this.http.get<Amiibo[]>('api/amiibo/get');
  }

  setOwn(id: string) {
    return this.http.put('api/amiibo/set_own/' + id, { })
      .pipe();
  }

}
