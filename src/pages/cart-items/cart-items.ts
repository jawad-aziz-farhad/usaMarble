import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Parse } from '../../providers';
import { Post } from '../../models';
/**
 * Generated class for the CartItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart-items',
  templateUrl: 'cart-items.html',
})
export class CartItemsPage {

  private items: Post[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private parse: Parse) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartItemsPage');
  }

  ionViewWillEnter(){
    this.items = this.parse.getData();
    console.log("CART ITEMS: "+ JSON.stringify(this.items));
  }

}
