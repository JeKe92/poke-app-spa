import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IPokemonCard, IPokemonsResponse, IPokemonTypeType } from '../components/pokemon/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = "https://pokeapi.co/api/v2/";
  }

  getPokemon(url: string): Promise<IPokemonCard> {
    return this.fetchApi(url ?? this.url + 'pokemon/');
  }

  getPokemons(url?: string): Promise<IPokemonsResponse> {
    return this.fetchApi(url ?? this.url + 'pokemon/');
  }

  private async fetchApi(url: string): Promise<any> {
    return (await fetch(url)).json();
  }
}
