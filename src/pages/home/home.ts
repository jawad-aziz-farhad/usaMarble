import { Component } from '@angular/core';
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
  keyframes
} from '@angular/animations';

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
        animate('.6s ease-out', keyframes([
          style({opacity: 1,  transform: 'translateX(0)',     offset: 0}),
          style({opacity: .5, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0,  transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})

export class HomePage {

  private posts: Post[] = [];
  private next: number = 0;
  private state: string = '';
  constructor(public navCtrl: NavController) {
    this.init();
  }

  ionViewWillEnter(){
    this.state = 'in';
  }
  
  /* INITIALIZING WITH DATA */
  init(){
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
    this.state = 'out';

    setTimeout(() => {
      this.navCtrl.push(DetailsPage, { post: post})
    }, 250);
    
  }

}
