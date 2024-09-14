import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage {

  contenidoActual: string = 'trabajos'; // Mostrar 'trabajos' por defecto

  cambiarContenido(event: any) {
    this.contenidoActual = event.detail.value;
  }
  constructor() { }
}
