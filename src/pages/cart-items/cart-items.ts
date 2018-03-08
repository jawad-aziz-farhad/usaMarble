import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform , ViewController , AlertController} from 'ionic-angular';
import { Post } from '../../models';

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { EmailComposer } from '@ionic-native/email-composer';
import { Parse } from '../../providers';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs; 

import { ERROR, DELETE_ALERT_TITLE, DELETE_ALERT_MESSAGE, DONT_DELETE } from '../../config/config';

import { Alert } from '../../classes';
/**
 * Generated class for the CartItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart-items',
  templateUrl: 'cart-items.html',
})
export class CartItemsPage {

  private items: Post[] = [];
  private pdfObj: any;

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController, 
              public alertCtrl: AlertController,
              public navParams: NavParams,
              private parse: Parse,
              private plt: Platform, 
              private file: File, 
              private fileOpener: FileOpener,
              private emailComposer: EmailComposer ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartItemsPage');
  }

  ionViewWillEnter(){
    this.items = this.parse.getData();
    console.log("CART ITEMS: "+ JSON.stringify(this.items));
  }

  createPDF() {

    let docDefinition = {
      header: { text: 'USA GRANITE FACTORY.COM CONTRACTOR ESTIMATE', style: 'header' , margin: 8 },
      content: [
        {
          columns: [
           { text:'CUSTOMERS NAME', style: 'column' } ,
            [
              'ABC XYZ'
            ]
          ],
          style: {margin: 10}
        },
        {
          columns: [
            { text: 'ADDRESS', style: 'column' } ,
            [
              'Customers address.'
            ]
          ]
        },
        {
          columns: [
            {text: 'PHONE' , style: 'column' } ,
            [
              '0092-316-1234567'
            ]
          ]
        },
        {
          columns: [
            { text: 'EMAIL', style: 'column' } ,
            [
              'abc@gmail.com'
            ]
          ]
        },
        this.table(this.parse.getData(),[ 'PRODUCT', 'Qty', 'COST', 'TOTAL']),
      ],
      styles: {
        header: {
          fontSize: 20,
          bold: true,
          alignment: 'center',
          margin: [ 5, 2, 10, 20 ] 
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        column: {
          bold: true,
          margin: [ 5, 2, 10, 20 ]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        }
      }
    }

    this.pdfObj = pdfMake.createPdf(docDefinition);
    this.showPDF();
  }

  showPDF() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
 
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'order.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'order.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }

  buildTableBody(data, columns) {

    var body = [];
    
    body.push(columns);

    data.forEach(function(row) {
      var dataRow = [];
      columns.forEach(function(column) {
        if(column == 'PRODUCT')
          column = 'name';
        else if(column == 'COST')
          column = 'price';
        else if(column == 'TOTAL')
          column = 'cartPrice';
        else if(column == 'Qty')
          column = 'quantity';
        
        let value = row[column];
        let style = null;

        if(column == 'price' || column == 'cartPrice')
          value = '$ ' + value;
        if(column == 'name')
          style = { italic: true, alignment: 'left', fontSize: 14 };
        else
          style = { italic: true, alignment: 'center'};

        dataRow.push({text: value, style: style});
      });

      body.push(dataRow);
    });

    return body;
}

  table(data, columns) {
    return {
      table: {
        headerRows: 1,
        widths: [ '*', 'auto', 'auto', 'auto' ],
        body: this.buildTableBody(data, columns),
      }
    };
  }


  removeConfirmation(index: number){
    
    let alert = new Alert(this.alertCtrl);

    alert.showAlert(DELETE_ALERT_TITLE,DELETE_ALERT_MESSAGE).then(result => {
      if(result == 'yes')
        this.parse.getData().splice(index,1);
      else
        console.log(DONT_DELETE);  
    }).catch(error => console.error(ERROR));
  }

}
