import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Pokedex from 'src/models/Pokedex';
import Pokemon from 'src/models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export default class PokemonService {
  private _apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  
  getPokedex(): Observable<Pokedex> {
    return this.http.get<Pokedex>(this._apiUrl);
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this._apiUrl}${name}`);
  }
  constructor(private http: HttpClient) {  }
}
