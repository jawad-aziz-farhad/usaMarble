import { Component  , AnimationTransitionEvent } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Post } from '../../models/posts.interface';
import { DetailsPage } from '../details/details';
import {
  trigger,
  state,
  style,
  animate,
  stagger,
  query,
  transition,
  keyframes,
  group
} from '@angular/animations';

import { Search } from '../../providers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('flyInOut', [
      transition('* => in', [
        animate('0.2s 100ms ease-in', keyframes([
          style({opacity: 0,  transform: 'translateX(-100%)', offset: 0}),
          style({opacity: .5, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1,  transform: 'translateX(0)',     offset: 1.0})
        ])),
      ]),
      transition('* => out', [
        animate('0.6s 0.3s ease-out', keyframes([
          style({opacity: 1,  transform: 'translateX(0)',     offset: 0}),
          style({opacity: .5, transform: 'translateX(-75px)', offset: 0.7}),
          style({opacity: 0,  transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})

export class HomePage {

  private posts: Post[] = [];
  private data = [  {id: 1, name: 'Bisque', image: 'assets/imgs/bisque.jpg' , price: '$100'},
                    {id: 2, name: 'Champagne', image: 'assets/imgs/champagne.jpg' , price: '$150'},
                    {id: 3, name: 'Coco Emperador', image: 'assets/imgs/coco-emperador.jpg' , price: '$200'},
                    {id: 4, name: 'Dark Emperador', image: 'assets/imgs/dark-emperador.jpg' , price: '$300'},
                    {id: 5, name: 'Iridium', image: 'assets/imgs/iridium.jpg' , price: '$350'},
                    {id: 6, name: 'Lhasa', image: 'assets/imgs/lhasa.jpg' , price: '$400'},
                    {id: 7, name: 'Melange Venetian', image: 'assets/imgs/melange-venetian.jpg' , price: '$500'},
                    {id: 8, name: 'Melange', image: 'assets/imgs/melange.jpg' , price: '$200'},
                    {id: 9, name: 'Milano Beige', image: 'assets/imgs/milano-beige.jpg' , price: '$600'},
                    {id: 10, name: 'Polar White', image: 'assets/imgs/polar-white.jpg' , price: '$650'},
                    {id: 11, name: 'Swiss Blanco', image: 'assets/imgs/swiss-blanco.jpg' , price: '$300'},
                    {id: 12, name: 'Vanilla Sky', image: 'assets/imgs/vanilla-sky.jpg' , price: '$450'}
                    ];
  private next: number = 0;
  private state: string = 'in';
  private selected: string = '';
  private isSearching: boolean = false;
  private searchInput: any; 
  private tempPosts: Post[] = [];         
                  
  constructor(public navCtrl: NavController,
              public search: Search) {
    this.init();
  }


  ionViewWillEnter(){
    this.state = 'in';
  }
  
  /* INITIALIZING WITH DATA */
  init(){
    for(let i=0;i<this.data.length;i++){
      let post = { id: null, name: null,image: null, price: null, date: null};
      post.id = this.data[i].id;
      post.name = this.data[i].name;
      post.image = this.data[i].image;
      post.price = this.data[i].price;
      post.date = new Date().getDate();
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
    if(this.searchInput)
      this.posts = this.search.search_Item(this.posts, this.searchInput);
    else
      this.posts = this.tempPosts;
  }
}
