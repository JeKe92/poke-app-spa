import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { IPokemon, IPokemonsResponse } from './pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {

  pokemons: IPokemon[] = [];
  nextPage: string = '';
  isScrollLoad: boolean = false;

  constructor( private pkmnService: PokemonService) {}

  ngOnInit(): void {
    this.initValues(false);
  }

  private async initValues(isNextPage: boolean) {
    const { results, next } = await this.getPokemonsPage(isNextPage);
    this.pokemons = [...this.pokemons, ...results];
    this.nextPage = next ?? '';
  }

  async getPokemonsPage(isNextPage: boolean): Promise<IPokemonsResponse> {
    if(!isNextPage) {
      return await this.pkmnService.getPokemons();
    }
    return await this.pkmnService.getPokemons(this.nextPage);
  }

  loadMorePokemon() {
    this.initValues(true);
  }
}
