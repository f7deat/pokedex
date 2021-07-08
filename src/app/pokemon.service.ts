import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Pokedex from 'src/models/Pokedex';
import Pokemon from 'src/models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export default class PokemonService {
  private _apiUrl: string = 'https://pokeapi.co/api/v2';
  
  getPokedex(next: string): Observable<Pokedex> {
    if(next)
    {
      return this.http.get<Pokedex>(next);
    }
    return this.http.get<Pokedex>(`${this._apiUrl}/pokemon`);
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this._apiUrl}/pokemon/${name}`);
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this._apiUrl}/pokemon/${id}`);
  }

  getPokemonByUrl(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${url}`);
  }

  getTypeDetail = (id: string) => this.http.get(`${this._apiUrl}/type/${id}`)
  
  getAbilityDetail = (id: string) => this.http.get(`${this._apiUrl}/ability/${id}`)

  getType = () => this.http.get(`${this._apiUrl}/type`)

  constructor(private http: HttpClient) {  }
}
