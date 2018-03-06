import { ModalController } from "ionic-angular";
import { Observable } from 'rxjs';

export class Modal {

    constructor(protected modalCtrl: ModalController){}

    openModal(page, data) {
        return new Observable(observer => {
            let modal = this.modalCtrl.create(page, data, { cssClass: 'inset-modal' });
            modal.onDidDismiss(data => {
                console.log("MODAL DISMISSED");
                observer.next(data);
                observer.complete();
            });
            modal.present();
        });
    }
}