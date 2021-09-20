import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '@env';
import { Character } from '@characters/models/character.model';
import {
  MarvelResponse,
  MarvelResponseData,
} from '@core/models/marvel-response.model';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getCharacters(page: number = 0): Observable<MarvelResponseData<Character>> {
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
          return res.data;
        })
      );
  }

  getCharactersByName(
    name: string,
    page: number = 0
  ): Observable<MarvelResponseData<Character>> {
    return this.http
      .get<MarvelResponse<Character>>(`${API_URL}/characters`, {
        params: {
          limit: 10,
          offset: page * 10,
          nameStartsWith: name,
        },
      })
      .pipe(
        map((res) => {
          console.log(res);
          return res.data;
        })
      );
  }

  getCharacterById(
    characterId: number
  ): Observable<MarvelResponseData<Character>> {
    return this.http
      .get<MarvelResponse<Character>>(`${API_URL}/characters/${characterId}`)
      .pipe(
        map((res) => {
          console.log(res);
          return res.data;
        })
      );
  }
}
