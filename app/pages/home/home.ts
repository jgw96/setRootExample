import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {getRootNav} from '../../utils/navUtils';

@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {

  constructor(private navCtrl: NavController) {

  }

  logout() {
    let rootNav = getRootNav(this.navCtrl);
    rootNav.setRoot(LoginPage);
    rootNav.popToRoot();
  }
}
