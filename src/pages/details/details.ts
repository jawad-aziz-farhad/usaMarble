import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../models';
import { Shop } from '../../classes';
import { Parse } from '../../providers'; 

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  private post: Post;

  private orderDate: any;
  private deliveryDate: any;
  private quantity: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public parse: Parse) { 
    this.init();                
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  ionViewWillEnter(){
  }

  init(){
    this.post = this.navParams.get('post');
    console.log("SELECTED POST: "+ JSON.stringify(this.post));
    if(this.post.quantity)
      this.quantity = this.post.quantity;
    else
      this.quantity = 1;  
    this.getDates(); 
  }

  
  addtoCart(){
    if(!this.checkStatus()){
     this.setData();
    }
    else{
      let index = this.parse.getData().indexOf(this.post);
      if(index > -1){
        this.parse.getData()[index].quantity = null;
        this.parse.getData()[index].cartPrice = null;
        this.parse.getData().splice(index, 1);
      }
      else
        this.setData();  
    }
    console.log("ALL DATA: "+ JSON.stringify(this.parse.getData()));
  }

  setData(){
    let shop = new Shop();
    shop.setAll(this.post);
    let price = this.post.price * this.quantity;
    shop.getAll().cartPrice = price;
    shop.getAll().quantity = this.quantity;
    shop.getAll().order_date = this.orderDate;
    shop.getAll().delivery_date = this.deliveryDate;
    this.parse.setData(shop.getAll());
  }
  
  checkStatus(){
    if(this.parse.getData()){
      if(this.parse.getData().indexOf(this.post) > -1)
        return true;
      else
        return false; 
    }
    else
      return false;
  }

  convertType(val){
    return +(val);
  }

  getDates(){
    let date: Date = new Date();
    let year  = date.getFullYear();
    let month = this.pad(date.getMonth() + 1);
    let day   = this.pad(date.getDate());
    this.orderDate  = `${year}` + '-' + `${month}` + '-' + `${day}`;
    day = parseInt(day) + 7;
    this.deliveryDate = `${year}` + '-' + `${month}` + '-' + `${day}`;
  }

  /* CHECKING THE NUMBER AND ADDING ZERO IF NUMBER IS LESS THAN 10 */
  pad(number) {
    if(!number)
      return '00';
    else
      return (number < 10) ? ("0" + number) : number;
 }

}
