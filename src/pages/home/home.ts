import { PokemonApiProvider } from './../../providers/pokemon-api/pokemon-api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pokemon } from '../../models/pokemon';
import {IPokemonDetails} from "../../models/pokemon-details";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

pokemons:[Pokemon]

  constructor(public navCtrl: NavController, private pokApi: PokemonApiProvider) {

    pokApi.getPokemons().subscribe((res:[Pokemon] )=> this.pokemons = res);

  }

  showPokDetail(pok:Pokemon){

   this.pokApi.getPokemonDetails(pok).subscribe(
     (res: IPokemonDetails) => {
     this.navCtrl.push('PokemonDetailPage', {pokDetail:res,  pok})
      }
    )

  }
}
