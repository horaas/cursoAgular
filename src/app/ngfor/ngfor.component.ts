import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  
  public animales:any[] = [
    {tipo: "Perro", nombre: "Pepo", edad: 12},
    {tipo: "Gato", nombre: "Saur", edad: 13},
    {tipo: "Loro", nombre: "Kikiriki", edad: 12}
  ];
  constructor() { }

  ngOnInit() {
  }

}
