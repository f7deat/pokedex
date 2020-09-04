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

  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this._apiUrl}${name}`);
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this._apiUrl}${id}`);
  }

  getPokemonByUrl(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${url}`);
  }

  constructor(private http: HttpClient) {  }
}
