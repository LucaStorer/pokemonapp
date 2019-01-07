import { PokemonApiProvider } from './../../providers/pokemon-api/pokemon-api';
import { Component } from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import { Pokemon } from '../../models/pokemon';
import {IPokemonDetails} from "../../models/pokemon-details";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

pokemons:[Pokemon]

  loading: any

  constructor(public navCtrl: NavController, private pokApi: PokemonApiProvider, private loadinCtrl: LoadingController) {

  this.PresentLoading()

    pokApi.getPokemons().subscribe((res:[Pokemon] )=> {
      this.loading.dismiss()
      this.pokemons = res
    });

  }

  PresentLoading(){
   this.loading = this.loadinCtrl.create({
     spinner: 'dots',
       content: 'Please wait...',
     dismissOnPageChange : true
    });

      this.loading.present();

  }

  showPokDetail(pok:Pokemon){
    this.PresentLoading()
    this.pokApi.getPokemonDetails(pok).subscribe(
     (res: IPokemonDetails) => {
     this.navCtrl.push('PokemonDetailPage', {pokDetail:res,  pok})
      }
    )

  }
}
