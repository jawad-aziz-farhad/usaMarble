import { Injectable } from '@angular/core';
import { Post } from '../../models';
/*
  Generated class for the ParseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Parse {

  private posts: Post[] = [];

  constructor() {}
  
  setData(post: any): void { this.posts.push(post); }
  getData(): Post[] { return this.posts; }

}
