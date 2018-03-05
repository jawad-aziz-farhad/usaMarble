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
/* PLUGINS */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuState} from '../providers/menu-state/menu-state';
import { Search } from '../providers/search/search';
import { Parse } from '../providers/parse/parse';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage
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
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuState,
    Search,
    Parse
  ]
})
export class AppModule {}
