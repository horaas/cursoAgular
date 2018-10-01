import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public configNav:any = [];
  constructor() { 
    this.configNav = [
      {
        name: 'Home',
        link: ''
      },
      {
        name: 'NgIf',
        link: 'ngif'
      },
      {
        name: 'NgClass',
        link: 'ngclass'
      },
      {
        name: 'NgFor',
        link: 'ngfor'
      },
      {
        name: 'Rutas',
        link: 'rutas'
      },
      {
        name: 'Servicios',
        link: 'servicios'
      }
    ]
  }

  ngOnInit() {
  }

}
