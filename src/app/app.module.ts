/* MODULES */
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {  ComponentsModule } from '../components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* ENTRY POINT OF APP */
import { MyApp } from './app.component';
/* PAGES */
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
/* PLUGINS */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuState} from '../providers/menu-state/menu-state';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
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
    MenuState
  ]
})
export class AppModule {}
