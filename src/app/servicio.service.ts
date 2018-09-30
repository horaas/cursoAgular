import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private equipo: any[] = [
    {
      nombre: "juan Alberto",
      especialidad: "HTML",
      descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed veniam illum recusandae blanditiis adipisci, quis eaque dolores dolor et libero fugiat iste officiis soluta quo architecto porro molestiae? Dolor, cupiditate!"
    },
    {
      nombre: "Maria",
      especialidad: "CSS",
      descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed veniam illum recusandae blanditiis adipisci, quis eaque dolores dolor et libero fugiat iste officiis soluta quo architecto porro molestiae? Dolor, cupiditate!"
    }
  ]
  constructor(/*private http: HttpClient*/) {
    // this.http.get('url')
    //   .map((res: Response) => {
    //     res.json();
    // })
    console.log("Hola llame al servicio");
   }

  obtenerEquipo() {
    return this.equipo;
  }
}
