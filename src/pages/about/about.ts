import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Books} from "../../models/books";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  booksLib:[Books]

  constructor(public navCtrl: NavController) {

   let book: Books = new Books('Prova 1', 'https://dqzrr9k4bjpzk.cloudfront.net/images/7829491/615778091.jpg','descrizione di prova 1')
    let book1: Books = new Books('Prova 2', 'https://dqzrr9k4bjpzk.cloudfront.net/images/7829491/615638457.jpg','descrizione di prova 2')
    let book2: Books = new Books('Prova 3', 'https://dqzrr9k4bjpzk.cloudfront.net/images/7829491/605167547.jpg','descrizione di prova 3')
    let book3: Books = new Books('Prova 4', 'https://dqzrr9k4bjpzk.cloudfront.net/images/7829491/461772555.jpg','descrizione di prova 4')
    let book4: Books = new Books('Prova 5', 'https://dqzrr9k4bjpzk.cloudfront.net/images/7829491/461996694.jpg','descrizione di prova 5')

    this.booksLib=[book,book1,book2,book3,book4]

    console.log(this.booksLib)

  }


  showBookDetail(book: Books){

    this.navCtrl.push('BookDetailPage', {book})


  }

}
