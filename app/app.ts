import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, Storage, LocalStorage, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {LoginPage} from './pages/login/login';
import {provideForms, disableDeprecatedForms} from '@angular/forms';

@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  local: Storage = new Storage(LocalStorage);

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Home', component: HomePage}
    ];

    this.local.get('token')
      .then(token => {
        if(!token) {
          this.rootPage = LoginPage;
        } else {
          this.rootPage = HomePage;
        }
      })
      .catch(err => {
        this.rootPage = LoginPage;
      });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp,
  disableDeprecatedForms(),
  provideForms());
