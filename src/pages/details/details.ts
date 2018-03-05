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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public parse: Parse) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  ionViewWillEnter(){
    this.post = this.navParams.get('post');
    console.log("SELECTED POST IS: "+ JSON.stringify(this.post));
  }

  addtoCart(){
    if(!this.checkStatus()){
     this.setData();
    }
    else{
      let index = this.parse.getData().indexOf(this.post);
      if(index > -1)
        this.parse.getData().splice(index, 1);
      else
        this.setData();  
    }
    console.log("ALL DATA: "+ JSON.stringify(this.parse.getData()));
  }

  setData(){
    let shop = new Shop();
    shop.setAll(this.post);
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
}
