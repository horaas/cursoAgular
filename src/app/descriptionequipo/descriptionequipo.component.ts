import { Component, OnInit } from '@angular/core'
import { ServicioService } from '../servicio.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-descriptionequipo',
  templateUrl: './descriptionequipo.component.html',
  styleUrls: ['./descriptionequipo.component.css']
})
export class DescriptionequipoComponent implements OnInit {

  public equipo:any;
  constructor(route: ActivatedRoute, _service: ServicioService) {
     route.params.subscribe( (params) => {
        this.equipo = _service.getIdEquipo(params['id']);
        console.log(this.equipo.nombre);
     });
  }

  ngOnInit() {
  }

}
