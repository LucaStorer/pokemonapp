import { IPokemonData } from './pokemon-data';


export interface IpokemonResults{

count: number
previous: string,
results: [IPokemonData],
next: string

}
