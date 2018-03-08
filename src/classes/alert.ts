import { AlertController } from "ionic-angular";

export class Alert {

    constructor(private alertCtrl: AlertController){}

    showAlert(title: string, message: string) {

        return new Promise((resolve, reject) => {
    
          let alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  resolve('cancel');
                }
              },
              {
                text: 'Yes',
                handler: () => {
                  resolve('yes');
                }
              }
            ]
          });
          
          alert.present();
    
        });
    }
}