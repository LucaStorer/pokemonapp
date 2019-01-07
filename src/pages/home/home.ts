import { IPokemonData } from './../../models/pokemon-data';
import { PokemonApiProvider } from './../../providers/pokemon-api/pokemon-api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IpokemonResults } from '../../models/pokemon-results';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

pokemons:[IPokemonData]


  constructor(public navCtrl: NavController, pokApi: PokemonApiProvider) {


    // Create observer object
    const myObserver = {

      next: (res:IpokemonResults )=> this.pokemons = res.results,
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    pokApi.getPokemons().subscribe(myObserver);

  }

}
