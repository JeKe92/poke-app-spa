import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-grid',
  templateUrl: './poke-grid.component.html',
  styleUrls: ['./poke-grid.component.sass']
})
export class PokeGridComponent implements OnInit {
  @Input() pokemons: any[];
  constructor() {
    this.pokemons = [];
   }

  ngOnInit(): void {
  }

}
