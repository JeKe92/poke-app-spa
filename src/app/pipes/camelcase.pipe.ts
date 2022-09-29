import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})
export class CamelcasePipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): string {
    if(value) {
      const first = value?.slice(0,1).toUpperCase();
      return first + value.slice(1);
    }

    return '';
  }

}
