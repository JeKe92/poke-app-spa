import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../pokemon.interface';

@Component({
  selector: 'app-poke-grid',
  templateUrl: './poke-grid.component.html',
  styleUrls: ['./poke-grid.component.sass']
})
export class PokeGridComponent implements OnInit {
  @Input() pokemons: IPokemon[];
  constructor() {
    this.pokemons = [];
   }

  ngOnInit(): void {
  }

}
