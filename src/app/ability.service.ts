import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {
  private homeURL = 'https://pokeapi.co/api/v2/ability/';
  ListAbility(): Observable<any> {
    return this.http.get<any>(this.homeURL).pipe(
      tap(rec => console.log(`${JSON.stringify(rec)}`)),
      catchError(error => of([]))
      );
  }
  constructor(private http: HttpClient) {  }
}
