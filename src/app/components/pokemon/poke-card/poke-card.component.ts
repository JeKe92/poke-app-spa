import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { IPokemon, IPokemonCard } from '../pokemon.interface';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.sass']
})
export class PokeCardComponent implements OnInit {
  @Input() pokemon?: IPokemon;
  pokemonCard?: IPokemonCard;
  formattedType: string = '';

  constructor(private pkmnService: PokemonService) { }

  ngOnInit(): void {
    this.initValues();
  }

  async initValues(): Promise<void> {
    this.pokemonCard = await this.createPokemonCard();
  }

  async createPokemonCard(): Promise<IPokemonCard | undefined> {
    return this.pokemon && await this.pkmnService.getPokemon(this.pokemon.url);
  }
}
