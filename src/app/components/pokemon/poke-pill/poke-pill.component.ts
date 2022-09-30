import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-pill',
  templateUrl: './poke-pill.component.html',
  styleUrls: ['./poke-pill.component.sass']
})
export class PokePillComponent implements OnInit {
  @Input() label: string;
  constructor() {
    this.label = '';
   }

  ngOnInit(): void {}

}
