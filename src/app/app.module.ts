import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { RoutesComponent } from './routes/routes.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';

import { AppRoutingModule } from './routes/ruotes-routing.component';
import { NavComponent } from './routes/nav/nav.component';
import { FooterComponent } from './routes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgclassComponent,
    NgforComponent,
    RoutesComponent,
    CuerpoComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
