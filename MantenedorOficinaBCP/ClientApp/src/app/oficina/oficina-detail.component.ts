import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Oficina } from '../models/oficina'

@Component({
  selector: 'app-oficina-detail',
  templateUrl: './oficina-detail.component.html',
})
export class OficinaDetailComponent implements OnInit {
  OficinaArray: Oficina[] = [];
  selectedOficina: Oficina = new Oficina();
  
  constructor(private _route: ActivatedRoute, private _router: Router) {

  }

  obtenerOficinaIndividual(idRec) {
    let oficina = JSON.parse(localStorage.getItem('oficina'));
    for (let i in oficina) {
      if (oficina[i].id == idRec) {
        let oficinaActual = oficina[i];
        this.selectedOficina.id = oficinaActual.id;
        this.selectedOficina.agencia = oficinaActual.agencia;
        this.selectedOficina.distrito = oficinaActual.distrito;
        this.selectedOficina.provincia = oficinaActual.provincia;
        this.selectedOficina.departamento = oficinaActual.departamento;
        this.selectedOficina.direccion = oficinaActual.direccion;
        this.selectedOficina.foto = oficinaActual.foto;
        this.selectedOficina.lat = oficinaActual.lat;
        this.selectedOficina.lon = oficinaActual.lon;

      }
    }

  }

  Regresar(): void {
    this._router.navigate(['/oficina']);
  }

  EditarOficina(): void {
    let oficina = JSON.parse(localStorage.getItem('oficina'));
    for (let i in oficina) {
      if (oficina[i].id == this.selectedOficina.id) {
        oficina[i] = this.selectedOficina;
        console.log(oficina);
        localStorage.setItem("oficina", JSON.stringify(oficina));
        this.selectedOficina = new Oficina();
      }
    }
  }

  ngOnInit() {
    let idRec = +this._route.snapshot.paramMap.get('id');
    this.obtenerOficinaIndividual(idRec);
  }

  
  
}
