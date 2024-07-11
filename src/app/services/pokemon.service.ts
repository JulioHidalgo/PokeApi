import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemons(index): Observable<any> {
    return this.http.get(`${this.apiUrl}/${index}`);
  }
  // getPokemons(id: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/${id}`);
  // }
}