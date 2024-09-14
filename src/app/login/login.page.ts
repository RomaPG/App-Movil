import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  login() {
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');

    if (this.email === registeredUser.email && this.password === registeredUser.password) {
      this.navCtrl.navigateForward('/home'); // Navegar al Home
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  goToForgotPassword() {
    this.navCtrl.navigateForward('/forgot-password');
  }
}
