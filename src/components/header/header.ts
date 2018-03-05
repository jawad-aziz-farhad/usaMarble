import { Component, Input, Output , EventEmitter} from '@angular/core';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html',
 })
export class HeaderComponent {

  @Input()title: string;
  @Output()search = new EventEmitter<any>();

  constructor(private menuCtrl: MenuController) {
    console.log('Hello HeaderComponent Component');
  }

  menuOpen(){
    this.menuCtrl.open();
  }

  onSearch(){
    this.search.emit('search');
  }
}
