import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

import { Parse } from '../../providers';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs; 

/**
 * Generated class for the PdfViewerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pdf-viewer',
  templateUrl: 'pdf-viewer.html',
})
export class PdfViewerPage {

  private pdfObj = null;

  constructor(private navCtrl: NavController, 
              private navParams: NavParams,
              private parse: Parse,
              private plt: Platform, 
              private file: File, 
              private fileOpener: FileOpener) {
    this.createPdf();            
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfViewerPage');
  }

  createPdf() {

    var docDefinition = {

      content: [
        { text: 'Order Details', style: 'header' },
        this.table(this.parse.getData(),[ 'Product', 'Unit Price', 'Total Price', 'Quantity', 'Order Date' , 'Delivery Date']),
      ],
      styles: {
        header: {
          fontSize: 28,
          bold: true
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
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
        this.file.writeFile(this.file.dataDirectory, this.parse.getData()[0].name+'.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + this.parse.getData()[0].name+'.pdf', 'application/pdf');
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
        if(column == 'Product')
          column = 'name';
        else if(column == 'Unit Price')
          column = 'price';
        else if(column == 'Total Price')
          column = 'cartPrice';
        else if(column == 'Quantity')
          column = 'quantity';
        else if(column == 'Order Date')
          column = 'order_date';
        else if(column == 'Delivery Date')
          column = 'delivery_date';    
         
        dataRow.push({text: row[column], style: { italic: true, alignment: 'center', fontSize: 16}});
      });

      body.push(dataRow);
    });

    return body;
}

table(data, columns) {
    return {
      table: {
        headerRows: 1,
        body: this.buildTableBody(data, columns)
      }
    };
  }
}
