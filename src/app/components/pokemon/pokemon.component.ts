import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { IPokemon, IPokemonsResponse } from './pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {

  pokemons: IPokemon[];
  nextPage: string;
  previousPage: string;

  constructor( private pkmnService: PokemonService) {
    this.pokemons = [];
    this.nextPage = '';
    this.previousPage = '';
   }

  ngOnInit(): void {
    this.initValues();
  }

  async initValues() {
    const {results, next, previous} = await this.getPokemonsPage();
    this.pokemons = results;
    this.nextPage = next ?? '';
    this.previousPage = previous ?? '';
  }

  async getPokemonsPage(): Promise<IPokemonsResponse> {
    return await this.pkmnService.getPokemons();
  }

}
