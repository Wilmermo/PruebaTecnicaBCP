import { Component } from '@angular/core';

import listaOficinaBCP from 'src/assets/agencias.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  Oficinas: any = listaOficinaBCP;

  constructor() {
    this.grabarOficinaStorage();
  }

  grabarOficinaStorage() {
    let oficina = this.Oficinas;
    localStorage.setItem("oficina", JSON.stringify(oficina));
  }

}
