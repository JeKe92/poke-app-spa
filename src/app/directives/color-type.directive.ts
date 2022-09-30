import { Directive, ElementRef, Input } from '@angular/core';
import { ITypeColors, typeMapping } from '../helpers/type.map';

@Directive({
  selector: '[appColorType]'
})
export class ColorTypeDirective {

  @Input() set appColorType(pokeType: string) {
    const matchedType: keyof ITypeColors = this.findTypeColor(pokeType);
    const {[matchedType]: type} = typeMapping

    const bgColor = type?.[0] ?? "white";
    const fontColor = type?.[1] ?? "black";

    this.element.nativeElement.style.background = bgColor;
    this.element.nativeElement.style.color = fontColor;    
  }
  constructor(private element: ElementRef) { }

  findTypeColor(type: string): keyof ITypeColors {
    const types: (keyof ITypeColors)[] = Object.keys(typeMapping) as (keyof ITypeColors)[];
    return types.find(
      (typeColor: string) => type?.indexOf(typeColor) > -1
    ) ?? 'unknown' as keyof ITypeColors;
  }
}
