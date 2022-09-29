import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatType'
})
export class FormatTypePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value?.types
      .map((pokemonType: any) => {
        return pokemonType.type.name;
      })
      .join(", ").toUpperCase();
  }

}
