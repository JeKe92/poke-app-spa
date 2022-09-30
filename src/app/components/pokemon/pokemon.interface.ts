export interface IPokemonsResponse {
    count: number,
    next: string | undefined,
    previous: string | undefined,
    results: Array<IPokemon>,
}

export interface IPokemon {
    name: string,
    url: string,
}

export interface IPokemonCard {
    id: string,
    name: string,
    sprites: any,
    types: any[]
}

export interface IPokemonType {
    slot: string,
    type: IPokemonTypeType,
}

export interface IPokemonTypeType {
    name: string,
    url: string,
    color?: string,
}
