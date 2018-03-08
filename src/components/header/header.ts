import { Component, Input, Output , EventEmitter} from '@angular/core';
import { MenuController , ModalController , NavController } from 'ionic-angular';
import { Parse } from '../../providers';
import { Modal } from '../../classes';
import { ERROR } from '../../config/config';
import { PdfViewerPage } from '../../pages/pdf-viewer/pdf-viewer';
import { CartItemsPage } from '../../pages/cart-items/cart-items';
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
export class HeaderComponent extends Modal {

  @Input()title: string;
  @Input()isSearching: boolean = false;
  @Output()search = new EventEmitter<any>();

  constructor(private menuCtrl: MenuController,
              protected modalCtrl: ModalController,
              private navCtrl: NavController,
              private parse: Parse) {
    super(modalCtrl);         
  }

  menuOpen(){
    this.menuCtrl.open();
  }

  onSearch(){
    this.search.emit('search');
  }

  showCartItems(){
    //this.navCtrl.push(PdfViewerPage);
    this.navCtrl.push(CartItemsPage);
    
    // this.openModal('CartItemsPage', null).subscribe(result => {
    //   console.log("RESULT: "+ JSON.stringify(result));
    // },
    // error => console.error(ERROR));
  }
}
