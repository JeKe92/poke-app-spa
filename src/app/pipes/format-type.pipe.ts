import { Pipe, PipeTransform } from '@angular/core';
import { IPokemonCard, IPokemonType } from '../components/pokemon/pokemon.interface';

@Pipe({
  name: 'formatType'
})
export class FormatTypePipe implements PipeTransform {

  transform(value: IPokemonCard | undefined, ...args: unknown[]): string[] {    
    return value
      ? value.types
        .map((pokemonType: IPokemonType) => pokemonType.type.name)
      : [];
  }

}
