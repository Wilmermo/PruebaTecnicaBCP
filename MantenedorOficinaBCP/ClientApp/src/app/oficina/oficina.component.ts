import { Component } from '@angular/core';



@Component({
  selector: 'app-oficina',
  templateUrl: './oficina.component.html',
})
export class OficinaComponent {
  Oficinas: any;
  
  constructor() {
    this.Oficinas = JSON.parse( localStorage.getItem("oficina"));
  }
  
}
