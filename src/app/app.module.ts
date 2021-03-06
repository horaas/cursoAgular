import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { RoutesComponent } from './routes/routes.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';

import { AppRoutingModule } from './ruotes-routing.component';
import { NavComponent } from './routes/nav/nav.component';
import { FooterComponent } from './routes/footer/footer.component';
import { DescriptionequipoComponent } from './descriptionequipo/descriptionequipo.component';
// servicios
import { ServicioService } from './servicio.service';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgclassComponent,
    NgforComponent,
    RoutesComponent,
    CuerpoComponent,
    NavComponent,
    FooterComponent,
    ServiciosComponent,
    DescriptionequipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ServicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
