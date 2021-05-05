import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonType } from 'src/models/PokemonType';

@Injectable({
  providedIn: 'root'
})
export default class PokemonTypeService {

  constructor(private http: HttpClient) { }
  
  private _baseUrl: string = 'https://pokeapi.co/api/v2/type';

  getPokemonType(type: string): Observable<PokemonType> {
    return this.http.get<PokemonType>(`${this._baseUrl}/${type}`);
  }

}
