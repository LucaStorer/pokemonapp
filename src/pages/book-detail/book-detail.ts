import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Books} from "../../models/books";

/**
 * Generated class for the BookDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-detail',
  templateUrl: 'book-detail.html',
})
export class BookDetailPage {

  bookDet:Books

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.bookDet=navParams.get('book');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookDetailPage');
  }

}
