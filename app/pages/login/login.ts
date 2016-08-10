import {Component} from '@angular/core';
import {NavController, Storage, LocalStorage} from 'ionic-angular';
import {HomePage} from '../home/home';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  templateUrl: 'build/pages/login/login.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class LoginPage {

  loginForm: FormGroup;

  username: AbstractControl;
  password: AbstractControl;

  local: Storage = new Storage(LocalStorage);

  constructor(private navCtrl: NavController, private fb: FormBuilder) {

    this.loginForm = fb.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    });

    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];
  }

  login(value: string): void {
    if(this.loginForm.valid){

      this.local.set('token', 'LoggedIn');

      this.navCtrl.setRoot(HomePage);
      this.navCtrl.popToRoot();
    }
  }
}
