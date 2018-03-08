/* MODULES */
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../components/components.module';
import { DirectivesModule } from '../directives/directives.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageZoomModule } from 'angular2-image-zoom';

/* ENTRY POINT OF APP */
import { MyApp } from './app.component';
/* PAGES */
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { PdfViewerPage } from '../pages/pdf-viewer/pdf-viewer';
import { CartItemsPage } from '../pages/cart-items/cart-items';
import { SlidesPage } from '../pages/slides/slides';

/* PLUGINS */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { EmailComposer } from '@ionic-native/email-composer';

/* PROVIDERS */
import { MenuState} from '../providers/menu-state/menu-state';
import { Search } from '../providers/search/search';
import { Parse } from '../providers/parse/parse';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    PdfViewerPage,
    SlidesPage,
    CartItemsPage
  ],
  imports: [
    BrowserModule,
    DirectivesModule,
    BrowserAnimationsModule,
    ComponentsModule,
    ImageZoomModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    PdfViewerPage,
    SlidesPage,
    CartItemsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileOpener,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuState,
    Search,
    Parse
  ]
})
export class AppModule {}
