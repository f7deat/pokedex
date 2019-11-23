import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { PokemonType } from 'src/models/PokemonType';
import { Pokemon } from 'src/models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private homeURL = 'https://pokeapi.co/api/v2/pokemon/';
  listPokedex(): Observable<any> {
    return this.http.get<any>(this.homeURL).pipe(
      tap(rec => console.log(`${JSON.stringify(rec)}`)),
      catchError(error => of([]))
      );
  }
  constructor(private http: HttpClient) {  }
}
