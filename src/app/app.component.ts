import { Component, ViewChild , AnimationTransitionEvent } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {
  animate, state, style, transition, trigger , keyframes
} from '@angular/animations';

import { MenuState } from '../providers/menu-state/menu-state';

@Component({
  templateUrl: 'app.html',
  animations: [
    trigger('slide', [
      transition('* => show', [
        animate('0.2s 100ms ease-in', keyframes([
          style({opacity: 0,  transform: 'translateX(-100%)', offset: 0}),
          style({opacity: .5, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1,  transform: 'translateX(0)',     offset: 1.0})
        ])),
      ]),
      transition('* => hide', [
        animate('0.6s 0.3s ease-out', keyframes([
          style({opacity: 1,  transform: 'translateX(0)',     offset: 0}),
          style({opacity: .5, transform: 'translateX(-75px)', offset: 0.7}),
          style({opacity: 0,  transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  private menuState: any;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public state: MenuState) {
    this.state.setState('show');            
    this.menuState = this.state.getState();              
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  animationDone(event){
    if(this.state.getState() == 'show')
      this.state.setState('hide');
    else
      this.state.clearState();
  } 

  animationStarted(event){
  }
}
