import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  register() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    localStorage.setItem('registeredUser', JSON.stringify(user));
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    this.navCtrl.navigateForward('/login'); // Redirigir a login
  }

  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }
}
