import { Component , HostListener , AnimationTransitionEvent } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Post } from '../../models/posts.interface';
import { DetailsPage } from '../details/details';
import { HoverContainerAnimations , InOutAnimation } from '../../animations';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: InOutAnimation
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

  mouseHover(event){
    this.state = 'hover';
  }

  mouseLeave(event){
    this.state = 'in';
  }


}
