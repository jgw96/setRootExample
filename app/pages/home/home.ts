import { Component } from '@angular/core';
import {NavController, Storage, LocalStorage} from 'ionic-angular';
import {LoginPage} from '../login/login';

@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {

  local: Storage = new Storage(LocalStorage);

  constructor(private navCtrl: NavController) {

  }

  logout() {
    this.local.remove('token');

    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();
  }
}
