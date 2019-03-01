import { IPokemonDetails } from './../../models/pokemon-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pokemon } from '../../models/pokemon';
// import { PokemonApiProvider } from '../../providers/pokemon-api/pokemon-api';
// import { Observable } from 'rxjs/Observable';
//
/**
 * Generated class for the PokemonDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pokemon-detail',
  templateUrl: 'pokemon-detail.html',
})
export class PokemonDetailPage {

pok: Pokemon
pokdetails:  IPokemonDetails

  constructor(public navCtrl: NavController, public navParams: NavParams) {

this.pok=navParams.get('pok');
this.pokdetails= navParams.get('pokDetail')



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PokemonDetailPage');
  }

}
