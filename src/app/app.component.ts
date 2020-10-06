import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { timer } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss', 'transition.min.css']
})
export class AppComponent {

  showSplash = true;
  divImg = "ld ld-blur-in"
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(2000).subscribe(() => this.divImg = "ld ld-blur-out")
      timer(3000).subscribe(() => this.divImg = "ld ld-blur-in")
      timer(4000).subscribe(() => this.divImg = "ld ld-blur-out")
      timer(5000).subscribe(() => this.divImg = "ld ld-blur-in")
      
      timer(6000).subscribe(() => this.showSplash = false)
      
    });
  }
}
