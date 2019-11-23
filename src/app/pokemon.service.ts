import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonURL = 'https://pokeapi.co/api/v2/pokemon';
  getPokemon(name: string): Observable<any> {
    return this.http.get<any>(`${this.pokemonURL}/${name}`).pipe(
      tap(rec => console.log(`${JSON.stringify(rec)}`)),
      catchError(error => of([]))
    );
  }
  constructor(
    private http: HttpClient
    ) {  }
}
