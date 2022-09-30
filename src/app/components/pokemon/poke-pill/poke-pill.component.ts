import { Component, OnInit, Input } from '@angular/core';

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

  ngOnInit(): void {
  }

}
