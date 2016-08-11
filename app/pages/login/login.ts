import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {getRootNav} from '../../utils/navUtils';

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

  constructor(private navCtrl: NavController) {
  }

  login(): void {
      /*let rootNav = getRootNav(this.navCtrl);
      rootNav.setRoot(HomePage);
      rootNav.popToRoot();*/
      this.navCtrl.setRoot(HomePage);
  }
}
