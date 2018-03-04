import { Injectable } from '@angular/core';

/*
  Generated class for the MenuStateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MenuState {
  state: string = '';
  constructor() {
    console.log('Hello MenuStateProvider Provider');
  }

  setState(state: string){ this.state = state; }
  getState(): string { return this.state;}
  clearState(): void { this.state = '';}

}
