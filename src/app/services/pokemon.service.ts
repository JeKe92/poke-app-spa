import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IPokemonCard, IPokemonsResponse } from '../components/pokemon/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = "https://pokeapi.co/api/v2/pokemon/";
  }

  getPokemon(url?: string): Promise<IPokemonCard> {
    return this.fetchApi(url ?? this.url);
  }

  getPokemons(url?: string): Promise<IPokemonsResponse> {
    return this.fetchApi(url ?? this.url);
  }

  private async fetchApi(url: string): Promise<any> {
    return (await fetch(url)).json();
  }
}
