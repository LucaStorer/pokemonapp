import { IPokemonDetails } from '../../models/pokemon-details';
import { IPokemonData } from './../../models/pokemon-data';
import { IpokemonResults } from './../../models/pokemon-results';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import {Pokemon} from "../../models/pokemon"
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the PokemonApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokemonApiProvider {

pokUrl = "https://pokeapi.co/api/v2/pokemon/"
private limit = 10

  constructor(public http: HttpClient) {
    console.log('Hello PokemonApiProvider Provider');
  }

getPokemons():Observable<Pokemon[]>{

return this.http.get<IpokemonResults>(this.pokUrl + '?limit=' + this.limit).pipe(

    map((res:IpokemonResults) => res.results),

    map((res:[IPokemonData]) => {

      return res.map(pokData => new Pokemon(pokData) )
    })
)
}

getPokemonDetails(pok: Pokemon): Observable<IPokemonDetails>{

  return this.http.get<IPokemonDetails>(this.pokUrl + pok.id +'/')

}

}
