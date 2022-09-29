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
    name: string,
    sprites: any,
    types: any[]
}