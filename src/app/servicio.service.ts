import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private equipo: any[] = [
    {
      nombre: 'juan Alberto',
      especialidad: 'HTML',
      descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed veniam illum recusandae blanditiis adipisci, quis eaque dolores dolor et libero fugiat iste officiis soluta quo architecto porro molestiae? Dolor, cupiditate!'
    },
    {
      nombre: 'Maria',
      especialidad: 'CSS',
      descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptas maxime molestiae consectetur quas vel illum repellat, quos odit magnam, doloribus id porro cupiditate. Consequuntur alias labore quisquam nemo atque?'
    }
  ];
  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res) => {
      console.dir(res);
    });
   }

  obtenerEquipo() {
    return this.equipo;
  }

  getIdEquipo(id) {
    return this.equipo[id];
  }

}
