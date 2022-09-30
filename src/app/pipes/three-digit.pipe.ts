import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'threeDigit'
})
export class ThreeDigitPipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): string {
    return value ? ('000' + value).slice(-3) : '';
  }

}
