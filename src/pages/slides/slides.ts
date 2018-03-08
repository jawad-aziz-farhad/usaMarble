import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Search } from '../../providers';
import { Post } from '../../models/posts.interface';
import { DetailsPage } from '../details/details';
/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  private posts: Post[] = [];
  private data = [  {id: 1, name: 'Bisque', image: 'assets/imgs/bisque.jpg' , price: 100 , quantity: 0, order_date: null, delivery_date: null},
                    {id: 2, name: 'Champagne', image: 'assets/imgs/champagne.jpg' , price: 150, order_date: null, delivery_date: null},
                    {id: 3, name: 'Coco Emperador', image: 'assets/imgs/coco-emperador.jpg' , price: 200, order_date: null, delivery_date: null},
                    {id: 4, name: 'Dark Emperador', image: 'assets/imgs/dark-emperador.jpg' , price: 300, order_date: null, delivery_date: null},
                    {id: 5, name: 'Iridium', image: 'assets/imgs/iridium.jpg' , price: 350, order_date: null, delivery_date: null},
                    {id: 6, name: 'Lhasa', image: 'assets/imgs/lhasa.jpg' , price: 400, order_date: null, delivery_date: null},
                    {id: 7, name: 'Melange Venetian', image: 'assets/imgs/melange-venetian.jpg' , price: 500, order_date: null, delivery_date: null},
                    {id: 8, name: 'Melange', image: 'assets/imgs/melange.jpg' , price: 200, order_date: null, delivery_date: null},
                    {id: 9, name: 'Milano Beige', image: 'assets/imgs/milano-beige.jpg' , price: 600, order_date: null, delivery_date: null},
                    {id: 10, name: 'Polar White', image: 'assets/imgs/polar-white.jpg' , price: 650, order_date: null, delivery_date: null},
                    {id: 11, name: 'Swiss Blanco', image: 'assets/imgs/swiss-blanco.jpg' , price: 300, order_date: null, delivery_date: null},
                    {id: 12, name: 'Vanilla Sky', image: 'assets/imgs/vanilla-sky.jpg' , price: 450, order_date: null, delivery_date: null}
                    ];                    

  private next: number = 0;
  private state: string = 'in';
  private selected: string = '';
  private isSearching: boolean = false;
  private searchInput: any; 
  private tempPosts: Post[] = [];         
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public search: Search) {
    this.init();            
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }
  ionViewWillEnter(){
    this.state = 'in';
  }
  
  /* INITIALIZING WITH DATA */
  init(){
    for(let i=0;i<this.data.length;i++){
      let post = { id: null, name: null, image: null, price: null, quantity: null, order_date: null, delivery_date: null};
      post.id = this.data[i].id;
      post.name = this.data[i].name;
      post.image = this.data[i].image;
      post.price = this.data[i].price;
      this.posts.push(post);
    }
    this.tempPosts = this.posts;
  }

  /* GETTING DETAILS OF SELECTED POST */
  getDetails(post){
    this.state = 'out';
    let selectedPost = post;
    if(selectedPost.id == post.id)
      this.selected = 'selected';
    setTimeout(() => {
      this.navCtrl.push(DetailsPage, { post: post})
    }, 250);
  }

  /* WHEN USER TYPES TO SEARCH */ 
  onSearchInput(): any{
    if(this.searchInput){
      this.posts = this.search.search_Item(this.posts, this.searchInput);
    }
    else
      this.posts = this.tempPosts;
  }


}
