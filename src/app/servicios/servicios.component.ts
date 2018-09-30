import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  public equipo:any[] = [];

  constructor(private service: ServicioService) {
     this.equipo = this.service.obtenerEquipo();
  }

  ngOnInit() {
  }

}
