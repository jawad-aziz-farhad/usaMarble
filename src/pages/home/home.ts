import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Post } from '../../models/posts.interface';
import { DetailsPage } from '../details/details';


import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('state', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class HomePage {

  private posts: Post[] = [];
  private state: string;
  
  constructor(public navCtrl: NavController) {
    this.init();
  }
  /* INITIALIZING WITH DATA */
  init(){
    this.state = 'inactive';

    for(let i=0;i<5;i++){
      let post = { id: null, name: null, date: null};
      post.id = i;
      post.name = 'Post ' + (i + 1);
      post.date = new Date().getDate();
      this.posts.push(post);
    }
  }

  /* GETTING DETAILS OF SELECTED POST */
  getDetails(post){
    this.state = this.state === 'active' ? 'inactive' : 'active';
    setTimeout(() => {
      this.navCtrl.push(DetailsPage, { post: post})
    }, 1000);
    
  }

}
