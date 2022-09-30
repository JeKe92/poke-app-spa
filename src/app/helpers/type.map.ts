const darkText = '#000';
const lightText = '#fff';
export const typeMapping: ITypeColors = {
    normal: ['#a4acaf', darkText],
    fighting: ['#a3611c', lightText],
    flying: ['#3dc7ef', darkText],
    poison: ['#b97fc9', lightText],
    ground: ['#854507', lightText],
    rock: ['#a38c21', lightText],
    bug: ['#729f3f', lightText],
    ghost: ['#7b62a3', lightText],
    steel: ['#9eb7b8',darkText],
    fire: ['#fd7d24', lightText],
    water: ['#4592c4', lightText],
    grass: ['#9bcc50', darkText],
    electric: ['#eed535', darkText],
    psychic: ['#f366b9', lightText],
    ice: ['#82cbd1', darkText],
    dragon: ['#53a4cf', lightText],
    dark: ['#707070', lightText],
    fairy: ['#fdb9e9', darkText],
    unknown: ['', lightText],
    shadow: ['', lightText]
}

export interface ITypeColors {
    normal: string[];
    fighting: string[];
    flying: string[];
    poison: string[];
    ground: string[];
    rock: string[];
    bug: string[];
    ghost: string[];
    steel: string[];
    fire: string[];
    water: string[];
    grass: string[];
    electric: string[];
    psychic: string[];
    ice: string[];
    dragon: string[];
    dark: string[];
    fairy: string[];
    unknown: string[];
    shadow: string[];
}