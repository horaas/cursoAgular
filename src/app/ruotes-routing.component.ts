import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { RoutesComponent } from "./routes/routes.component";
import { NgifComponent } from "./ngif/ngif.component";
import { NgclassComponent } from "./ngclass/ngclass.component";
import { NgforComponent } from "./ngfor/ngfor.component";
import { CuerpoComponent } from "./cuerpo/cuerpo.component";
import { ServiciosComponent } from "./servicios/servicios.component";
import { DescriptionequipoComponent } from "./descriptionequipo/descriptionequipo.component";

const routes: Routes = [
    { path: '', component: RoutesComponent, pathMatch: 'full' },    
    { path: 'ngif', component: NgifComponent },
    { path: 'ngclass', component: NgclassComponent },
    { path: 'ngfor', component: NgforComponent },
    { path: 'rutas', component: CuerpoComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'descripcion/:id', component: DescriptionequipoComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
    { path: '', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}