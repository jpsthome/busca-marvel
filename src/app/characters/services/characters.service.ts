import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '@env';
import { Character } from '@characters/models/character.model';
import { MarvelResponse } from '@core/models/marvel-response.model';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getHeroes(page: number = 0): Observable<Character[]> {
    return this.http
      .get<MarvelResponse<Character>>(`${API_URL}/characters`, {
        params: {
          limit: 10,
          offset: page * 10,
        },
      })
      .pipe(
        map((res) => {
          console.log(res);
          return res.data.results;
        })
      );
  }
}
